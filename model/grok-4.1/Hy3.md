# Grok 4.1 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Grok 4.1 is an xAI release (announced 2025-11-17) that deliberately de-emphasized raw parameter/compute bragging and focused on three user-facing pain points: faster response, better factual accuracy (lower hallucination), and more human-like, emotionally aware dialogue. It shipped in two configurations — a "Thinking" (reasoning) variant and a "Non-thinking" variant — and was preceded by a ~2-week silent rollout (Nov 1–14, 2025) in which blind A/B tests showed ~64.78% of users preferred its output over the prior version. A companion "Grok 4.1 Fast" variant targeting agent/tool-calling workloads also appeared in mid-November 2025.

## Model card
| Field | Value |
|---|---|
| Vendor | xAI |
| Release | 2025-11-17 (public); silent rollout Nov 1–14, 2025 |
| Variants | Thinking (推理) / Non-thinking; plus "Grok 4.1 Fast" |
| Context window | Not explicitly published in reviewed sources (est. mid-range; treated as unconfirmed) |
| Modalities | Text in/out; vision/image understanding carried over from Grok 4 line |
| Key focus | Factual accuracy, low hallucination, emotional/social fluency, response speed |

## Raw benchmarks
- **Agent / Tool use:** The "Grok 4.1 Fast" build is positioned for agentic and tool-calling scenarios; the base 4.1 release itself centers on dialogue quality rather than agent harnesses, so agent scores are inferred rather than directly benchmarked in reviewed sources.
- **Reasoning:** "Thinking" mode provides explicit chain-of-thought; blind A/B preference of ~64.78% suggests strong perceived reasoning/usefulness, but no public reasoning-leaderboard number (e.g., GPQA) was found.
- **Coding:** Not a primary emphasis of the 4.1 release narrative; coding competence inferred from the Grok 4 lineage rather than a published SWE-bench figure.
- **Long context:** No explicit context-window figure confirmed in reviewed material; scored conservatively pending vendor disclosure.

## Normalized scores
- **Tool use: 78/100.** Fast variant targets tool/agent use, but base 4.1 is dialogue-centric; agent capability is inferred, not benchmarked.
- **Reasoning: 82/100.** Dedicated Thinking mode plus strong blind-A/B user preference; no hard leaderboard number published.
- **Context window: 75/100.** Not explicitly stated in reviewed sources; treated as unconfirmed/mid-range.
- **Multimodal: 80/100.** Inherits vision/image understanding from the Grok 4 family; no new multimodal claims highlighted.
- **Coding: 78/100.** Not a headline strength of this release; inferred from lineage.
- **Cost efficiency: 78/100.** xAI free/web tiers and API access exist, but no concrete per-token pricing was verified in reviewed sources.
- **Overall Score: 78.6/100.** Mean of the five quality dims (78+82+75+80+78 = 393 / 5 = 78.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baijiahao.baidu.com/s?id=1849125152011076045&wfr=spider&for=pc
  - https://blog.51cto.com/u_16099334/14340973
  - https://developer.aliyun.com/article/1723969
  - https://baijiahao.baidu.com/s?id=1849083231753179912&wfr=spider&for=pc
  - https://blog.csdn.net/Ai_Xiaofei/article/details/155076175
