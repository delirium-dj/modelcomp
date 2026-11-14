# GLM-4.7-Flash — findings by Hy3

- **Source / Date:** 百度百科, CSDN, ai-bot.cn — 2026-11-14
- **Overview:** GLM-4.7-Flash is Zhipu AI's open-source, free hybrid-thinking model with 30B total / 3B active parameters, positioned as a same-tier SOTA that balances performance and efficiency for lightweight deployment. On mainstream benchmarks (SWE-bench Verified, τ²-Bench) its composite performance exceeds gpt-oss-20b and Qwen3-30B-A3B. It is the efficient sibling of GLM-4.7 (which hit Code Arena open #1, HLE 42.8%, τ²-Bench 87.4, Artificial Analysis Intelligence Index 68, SWE-bench Verified 73.8%, LiveCodeBench V6 84.9).

## Model Card
| Field | Value |
| --- | --- |
| Provider | Zhipu AI (智谱) |
| Release date | ~2026-01/02 (Flash followed GLM-4.7) |
| Architecture | Hybrid-thinking MoE, 30B total / 3B active |
| Context window | Not disclosed (est. 128K–256K) |
| Modality | Text |
| License | Open weight (free) |
| Pricing | Free / open weight |

## Raw Benchmarks
### Agent / Tool Use
- τ²-Bench (interactive tool-calling): GLM-4.7 base scored 87.4 (open-source record); Flash inherits tool-collaboration strength.

### Reasoning
- Hybrid thinking (interleaved / retained / round-level thinking) for complex-task stability.

### Coding
- Surpasses gpt-oss-20b and Qwen3-30B-A3B on SWE-bench Verified; GLM-4.7 base: SWE-bench Verified 73.8%, LiveCodeBench V6 84.9.

### Long Context
- Not explicitly benchmarked for Flash.

## Normalized Scores
- **Tool use: 64/100.** Strong tool collaboration (τ²-Bench lineage).
- **Reasoning: 60/100.** Hybrid-thinking reasoning; solid for an efficient model.
- **Context window: 66/100.** Assumed standard; not benchmarked for Flash.
- **Multimodal: 44/100.** Text-only.
- **Coding: 64/100.** SWE-bench-Verified-class strength vs. peer efficient models.
- **Cost efficiency: 88/100.** 3B active, free/open-weight; extremely cheap to serve.
- **Overall Score: 59.6/100.** Mean of the five quality dims (64+60+66+44+64 = 298 / 5 = 59.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/%E6%99%BA%E8%B0%B1GLM-4.7/67116254
  - https://baike.baidu.com/item/GLM-4.7-Flash/67260996
  - https://ai-bot.cn/glm-4-7-flash/
