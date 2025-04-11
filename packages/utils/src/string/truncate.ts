/**
 * 문자열을 지정된 최대 길이로 자르고 말줄임표를 추가합니다.
 *
 * @param str - 자를 문자열
 * @param maxLength - 최대 길이 (말줄임표 포함, 기본값 50)
 * @param ellipsis - 사용할 말줄임표 문자열 (기본값 '...')
 * @returns 잘린 문자열 또는 원래 문자열이 최대 길이보다 짧으면 그대로 반환
 *
 * @example
 * truncate('이것은 매우 긴 문자열입니다.', 10); // "이것은 매우..."
 * truncate('짧은 문자열', 20); // "짧은 문자열"
 * truncate('Custom ellipsis', 10, '…'); // "Custom ell…"
 */
export function truncate(
  str: string,
  maxLength: number = 50,
  ellipsis: string = "..."
): string {
  // null이나 undefined인 경우 빈 문자열 반환
  if (str == null) {
    return "";
  }

  // 문자열로 변환
  const string = String(str);

  // 이미 최대 길이보다 짧으면 그대로 반환
  if (string.length <= maxLength) {
    return string;
  }

  // 말줄임표 길이 계산
  const ellipsisLength = ellipsis.length;

  // 문자열을 자를 위치 계산 (말줄임표 길이 고려)
  const truncatedLength = maxLength - ellipsisLength;

  // 음수가 되지 않도록 보장
  const sliceLength = Math.max(0, truncatedLength);

  // 문자열을 자르고 말줄임표 추가
  return string.slice(0, sliceLength) + ellipsis;
}
