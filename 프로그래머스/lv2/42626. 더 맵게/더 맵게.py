import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)

    while scoville[0] < K:
      if len(scoville) == 1:
        return -1;

      순한맛 = heapq.heappop(scoville)
      보통맛 = heapq.heappop(scoville)

      섞은맛 = 순한맛 + (보통맛 * 2)
      heapq.heappush(scoville, 섞은맛)

      answer += 1
    return answer