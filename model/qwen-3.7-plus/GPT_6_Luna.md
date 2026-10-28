# Qwen 3.7 Plus — findings by GPT-6 Luna

- Source: Alibaba Cloud/Qwen3.7-Plus (`qwen3.7-plus`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Cloud's closed model in the Qwen3.7 series, positioned as a cost-effective multimodal agent for coding, tool use, visual understanding, and GUI workflows. It is distinct from Qwen3.7 Max.
- **Provider / access:** Alibaba Cloud Model Studio, model ID `qwen3.7-plus`. Alibaba supports Chat Completions and Responses-compatible APIs; regional base URLs include Beijing, Singapore, and US (Virginia). [Alibaba model docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus) · [Alibaba launch / API guide](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
- **Release / knowledge:** Vals AI lists June 1, 2026 as the release date; Alibaba's launch article is dated June 3, 2026. These are retained as the catalog date and public announcement date, respectively. No knowledge-cutoff date was found. Alibaba says the rolling model ID is functionally equivalent to snapshot `qwen3.7-plus-2026-05-26`. [Vals AI](https://www.vals.ai/models/alibaba_qwen3.7-plus) · [Alibaba model docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus) · [Alibaba launch post](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
- **IDs:** Alibaba API ID `qwen3.7-plus`; pinned snapshot `qwen3.7-plus-2026-05-26`. The official docs explicitly say the rolling ID is functionally equivalent to that snapshot. [Alibaba model docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus)
- **Context window:** 1,000,000 tokens; official maximum input is 991,808 tokens (983,616 in thinking mode), maximum output 131,072, and maximum chain-of-thought length 262,144. Vals' evaluation used a 1M context but configured a 65,536-token max output. [Alibaba model docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus) · [Vals AI](https://www.vals.ai/models/alibaba_qwen3.7-plus)
- **Modalities:** Text, image, and video input; text output. Function calling, structured outputs, web search, prefix completion, and context caching are supported. No audio input or non-text output is listed. [Alibaba model docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus)
- **Pricing (as of 2026-10-29):** Alibaba's published standard prices vary by serving region and prompt length. For China (Beijing) and global service in US (Virginia), input ≤256K is $0.276 / output $1.101 per 1M tokens; for 256K–1M input it is $0.826 / $3.301. Singapore international prices are $0.40 / $1.60 and $1.20 / $4.80 for the same tiers. Vals reports its Alibaba API run at $0.40 / $1.60 and 65,536 max output. No free tier/ID was verified. These are standard listed prices; Alibaba notes that promotions may differ. [Alibaba model docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus) · [Vals AI](https://www.vals.ai/models/alibaba_qwen3.7-plus)
- **Architecture:** Private weights; no public parameter-count or architecture specification was found. [Vals AI](https://www.vals.ai/models/alibaba_qwen3.7-plus)

### Raw benchmarks found

> Exact-model evidence is available from Alibaba's scorecard and a Vals AI evaluation of Qwen 3.7 Plus. Vendor and independent measurements use different benchmark versions and agent scaffolds, so both are listed without treating them as direct contradictions.

Agent / tool use:

- Terminal-Bench 2.0: **70.3%** (Alibaba scorecard; Terminus-2/Harbor, five-run average, 256K context, 5-hour timeout). This is version 2.0, not the 2.1 evaluation below. [Alibaba scorecard / methodology](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
- ClawEval: **62.7%**; MCP-Mark: **58.7%** (Alibaba's published scorecard). [Alibaba scorecard](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
- Terminal-Bench 2.1: **52.81% ± 0.65**, rank **56/75** (Vals AI evaluation). [Vals AI](https://www.vals.ai/models/alibaba_qwen3.7-plus)
- Vals Index: **52.33**, rank **#13** in Vals' evaluated set; this is Vals' composite index, not Artificial Analysis Intelligence Index or GDPval-AA. [Vals AI](https://www.vals.ai/models/alibaba_qwen3.7-plus)
- τ²-Bench, GDPval-AA, OSWorld, and Toolathlon: **no verified exact-model score found** in the sources checked.

Reasoning / knowledge:

- Humanity's Last Exam (HLE): **34.7%** (Alibaba scorecard). Alibaba's accompanying methodology recommends an xhigh-style reasoning prompt; the published chart does not state a separate tool/no-tool HLE condition, so none is inferred here. [Alibaba scorecard / methodology](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
- GPQA Diamond and an exact-model MRCR/LCR result: **no verified numeric score found** in the sources checked. Alibaba describes strong GPQA performance in prose, but no readable score was found in the published scorecard.

Coding:

- SWE-bench Multilingual: **75.8%**; SWE-bench Pro: **57.6%**; NL2Repo: **41.1%** (Alibaba scorecard). Alibaba says its SWE-bench runs use an internal bash/file-edit agent scaffold with a 200K context window; SWE-bench Pro tasks and baselines were corrected and rerun. [Alibaba scorecard / methodology](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
- SWE-bench Verified: **66.67% on the Vals Index subset**, not the full Verified set. [Vals AI](https://www.vals.ai/models/alibaba_qwen3.7-plus)
- Vibe Code Bench v1.1: **46.39% ± 4.61**, rank **72/121** on the full leaderboard; **46.94%** on Vals' Index subset. SkillsBench: **54.30% ± 4.33**, rank **14/35**. [Vals AI](https://www.vals.ai/models/alibaba_qwen3.7-plus)
- SciCode, DeepSWE, and LiveCodeBench: **no verified exact-model score found** in the sources checked.

Multimodal:

- Alibaba scorecard: BabyVision **64.7%**, ScreenSpot Pro **79.0%**, MMBC **46.3%**, and RealWorldQA **86.9%**. Alibaba describes video understanding as supported and lists video benchmarks, but the scorecard's image does not expose a numerical video score in its text. [Alibaba scorecard / methodology](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
- Official API specification confirms text/image/video input and text output. [Alibaba model docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus)

Long context:

- The official input limit reaches 991,808 tokens (983,616 with thinking enabled), but **no verified 512K/1M retrieval-accuracy result** was found. The advertised window should not be read as proof of reliable retrieval at its full length. [Alibaba model docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus)

### Normalized scores (1–100)

- **Tool use: 78/100.** Alibaba reports 70.3% on Terminal-Bench 2.0 and 62.7% on ClawEval; Vals reports 52.81% on the newer 2.1 test. Missing GDPval-AA and τ² data, plus the TB version split, cap the score.
- **Reasoning: 82/100.** HLE 34.7% is strong and near the methodology's 40% frontier reference, but no verified GPQA Diamond or long-context reasoning score was found.
- **Context window: 95/100.** The documented 1M window meets the highest size tier; absent retrieval measurements prevent a score above the tier floor.
- **Multimodal: 87/100.** Official image/video input plus strong BabyVision, ScreenSpot Pro, and RealWorldQA scores support the video-capable tier; output is text-only and audio is not supported.
- **Coding: 83/100.** SWE-bench Pro 57.6%, SWE-bench Multilingual 75.8%, Vals Verified subset 66.67%, and Vibe Code Bench v1.1 46.39% show broad coding strength, while Terminal-Bench 2.1 at 52.81% and missing DeepSWE/SciCode cap it.
- **Cost efficiency: 90/100.** The ≤256K tier is $0.276/$1.101 per 1M tokens on US global service and $0.40/$1.60 in Singapore; longer prompts cost more, up to $0.826/$3.301 or $1.20/$4.80 respectively.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions: (78 + 82 + 95 + 87 + 83) / 5 = 85; cost is excluded. Best suited to multimodal GUI and coding-agent work where a million-token input is useful, with retrieval quality at the full window and benchmark-version sensitivity still unverified.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three independent search engines (Yahoo, DuckDuckGo, and Naver), followed by direct review of Alibaba's exact-ID model documentation and launch scorecard (including its embedded benchmark image), and Vals AI's evaluation page. Release-date, benchmark-version, region-pricing, and max-output discrepancies are preserved. Scores are normalized interpretations under `model-comparison.md`, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
