#ifndef _STL_ALLOC_HPP_
#define _STL_ALLOC_HPP_
class AllocMalloc
{
public:
    static void* allocate(size_t n) {
        void* result = malloc(n);
    }
    static void deallocate(void* p) {
        free(p);
    }
};

class AllocMallocPool
{
private:
    enum
    {
        ALIGN = 8,
        MAXSIZE = 128,
        NFREELIST = 16,
    };
    struct Obj
    {
        struct Obj* nextFree;
    };
    char* freeStart;
    char* freeEnd;
    size_t heapSize;
    Obj* freeList[NFREELIST];

private:
    // 获取 size为n 在 freelist 中的index、 n > 0  
    static int freeListIdx(size_t n) {
        return ((n + (size_t)ALIGN - 1)/(size_t)ALIGN - 1);
    }

    // 获取 size为n 向上取大小最接近的num*ALIGN的size
    static size_t roundUpSize(size_t n) {
        return (n + (size_t)ALIGN - 1) & ~((size_t)ALIGN - 1);
    }

    //从内存池、freelist、物理内存、中获取可用内存
    static char* chunkAlloc(size_t n, int& nObj) {
        int freeLeft = freeEnd - freeStart;
        size_t totalBytes = n * nObj;
        char* result;
        // 从内存池 获取大量
        if (freeLeft >= totalBytes) {
            result = freeStart;
            freeStart += totalBytes;
            return result;
        // 从内存池 获取少量
        } else if (freeLeft > n) {
            nObj = (int)freeLeft/n;
            result = freeStart;
            freeStart += nObj * n;
            return result;
        } else {
            size_t memToAlloc = 2 * totalBytes + roundUpSize(heapSize >> 4);
            // 清空 内存池
            if (freeLeft > 0) {
                Obj* *curFreeList = freeList + freeListIdx(freeLeft);
                ((Obj*)freeStart)->nextFree = *curFreeList;
                *curFreeList = (Obj*)freeStart;
            }

            // 申请物理内存
            freeStart = (char*)malloc(memToAlloc);
            if (0 == freeStart) {
                // 从size比n大的 freelist 获取
                int idx = freeListIdx(n) + 1;
                Obj* *curFreeList;
                Obj* p;
                for (; idx < NFREELIST; idx++) {
                    *curFreeList = freeList + idx;
                    p = *curFreeList;
                    if (0 != p) {
                        freeStart = (char*)p;
                        freeEnd = freeStart + (idx + 1) * ALIGN
                        *curFreeList = p->nextFree;
                        return chunkAlloc(n, nObj);
                    }
                }
                freeEnd = 0;
                // bad_alloc
                freeStart = (char*)AllocMalloc::allocate(n);
            }
            heapSize += memToAlloc;
            freeEnd = freeStart + memToAlloc;
            return chunkAlloc(n, nObj);
        }
    }

    // 从内存池获取内存 写入freelist中
    static void* refillList(size_t n) {
        int nObj = 20;
        char* ret;
        Obj* nextObj;

        char* ret = chunkAlloc(n, nObj);
        if (1 == nObj) return ret;
        Obj* *curFreeList = freeList + freeListIdx(n);
        Obj* p = *curFreeList = (Obj*)(ret + n);
        for (int i = 2; i < nObj; i++) {
            nextObj = (Obj*)(ret + i * n);
            p->nextFree = nextObj;
            p = nextObj;
        }
        p->nextFree = NULL;
        return ret;
    }

public:
    static void* allocate(size_t n) {
        //_S_round_up(_S_heap_size >> 4)
        void* ret = 0;
        // 大块走malloc
        if (n > MAXSIZE) {
            ret = AllocMalloc::allocate(n);
        } else {
            // 小块取链表
            Obj* *curFreeList = freeList + freeListIdx(n);
            Obj* result = *curFreeList;
            // freelist null 取内存池
            if (0 == result) {
                ret = refillList(n);
            } else {
                *curFreeList = result->nextFree;
                ret = result;
            }
        }
        return ret;

    }
    static void deallocate(void* p, size_t n) {
        Obj* *curFreeList = freeList + freeListIdx(n);
        (Obj*)p->nextFree = *curFreeList;
        *curFreeList = (Obj*)p;
        free(p);
    }

}

#endif