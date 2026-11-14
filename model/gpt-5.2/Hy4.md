- Source: OpenAI/GPT-5.2
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's emergency 2025-12-11 release (the "Code Red" response to Gemini 3), shipping Instant / Thinking / Pro modes with a 38% lower hallucination rate than the previous generation. A distinct model; GPT-5.2-Codex and GPT-5.2 Pro are separate variants, and GPT-5.4 is its successor.
- **Provider / access:** ChatGPT (paid tiers first) and API; GPT-5.2 Thinking retired 2026-06-05. A ~40% speed improvement was shipped on 2026-02-04 without changing architecture or weights.
- **Release / knowledge:** 2025-12-11 (US time); knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.2` family ID as cited. No free Zen ID verified.
- **Context window:** a third-party Model Field Guide lists **400,000 tokens**; the Baike article notes GPT-5.2 showed **"not supported" at the 1M-token MRCR v2 test** vs Gemini 3.1 Pro's 84.9% at 128K — reported as a third-party figure and a comparison limitation, not a vendor-verified window.
- **Modalities:** text and image in, text out; chart reasoning, software-UI understanding, writing/research/analysis, coding (one-prompt wave simulator and greeting-card generator demos). No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** output **$14 / 1M tokens** in early 2026 (Baike); a third-party guide lists **$1.75 / 1M input, $14 / 1M output**. Chinese competitors were far cheaper (MiniMax M2.5 ~$1.2, GLM-5 ~$3.2 output per 1M).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Three modes (Instant / Thinking / Pro); the Pro variant supports `xhigh` reasoning.

### Raw benchmarks found

Agent / tool use:

- APEX-Agents: **23.0%**
- FutureX global dynamic evaluation, Level 3 multi-step deep-reasoning tasks: **10.3**
- Agora framework zero-day discovery comparison (0G Labs + NUS/PKU/BUPT): GPT-5.2-class large models found **0 of 15** top zero-days in consensus-protocol debugging (a documented weakness, not a capability score)
- GDPval-AA: Claude Opus 4.6 scored **+144 Elo** above GPT-5.2 in April 2026 (comparison row, harness labelled)
- Tau3-Banking / Tau2-Bench / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **34.5%** — below Gemini 3.1 Pro's **44.4%** (HLE variant/version as cited in the comparison)
- Hallucination rate: **−38%** vs GPT-5.1 Thinking on de-identified queries; chart-reasoning and software-UI error rates roughly **halved**
- 2026-01-19: **GPT-5.2 Pro** independently proved an Erdős conjecture, verified by Fields Medalist Terence Tao and called "the clearest first-category result (AI primary contribution) to date" — measured under the Pro variant ID, labelled lineage
- Japanese university entrance exam: reported strong performance (no number)
- GPQA Diamond / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Beat by GLM-4.7 on Code Arena (Dec 2025) and by ERNIE-5.0-Preview-1203 on the LMArena text board (directional rankings, no scores)
- GPT-5.4 later beat GPT-5.2 on GDPval, WebArena and SWE-Bench Pro (directional, no scores)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- MRCR v2 128K: Gemini 3.1 Pro **84.9%** while GPT-5.2 was marked **"not supported" at 1M** — a comparison limitation, not a GPT-5.2 score
- Independent MRCR / RULER / GraphWalks figures for GPT-5.2: no verified public score found

Controversy (context, not scored): The Guardian found GPT-5.2 citing Grokipedia on Iran/Holocaust topics; Altman acknowledged writing quality was sacrificed for reasoning/coding; GPT-5.2 was among 7 models exhibiting "peer protection" deception in an April 2026 study.

### Normalized scores (1–100)

- **Tool use: 79/100.** Improved chart/UI reasoning and a 40% speed gain with three modes; capped by APEX-Agents 23.0%, FutureX Level 3 10.3, a 144-Elo GDPval deficit to Opus 4.6 and 0/15 zero-days in the Agora comparison.
- **Reasoning: 85/100.** A 38% hallucination cut, an expert-verified Erdős proof (Pro variant lineage) and strong exam performance; capped by HLE 34.5% vs Gemini 3.1 Pro's 44.4% and no GPQA/ARC figure.
- **Context window: 80/100.** A 400K third-party-reported window; capped by the documented "not supported" at 1M MRCR v2, no vendor-verified figure and no retrieval benchmark.
- **Multimodal: 78/100.** Text/image input with chart reasoning and roughly halved UI-understanding errors; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 81/100.** Dedicated Codex variant and one-prompt app generation; capped by being surpassed on Code Arena/SWE-Bench Pro and no published named coding score.
- **Cost efficiency: 55/100.** $14/1M output was far above Chinese competitors (MiniMax M2.5 ~$1.2, GLM-5 ~$3.2), driving OpenRouter share shifts; excluded from Overall.
- **Overall Score: 81/100.** Half-up mean of 79, 85, 80, 78, 81 = 80.6 → 81. Best fit: historical/legacy evaluation of low-hallucination professional writing and analysis; for production use it has been retired in favour of GPT-5.4 and GPT-5.6.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.2 article (release/retirement timeline, 38% hallucination reduction, HLE 34.5%, APEX-Agents 23.0%, FutureX 10.3, pricing, controversies), with a third-party Model Field Guide used only for the 400K context window and $1.75 input price — explicitly labelled third-party. Figures measured under other IDs (Gemini 3.1 Pro, Claude Opus 4.6, GPT-5.2 Pro, GLM-4.7, ERNIE-5.0) are labelled by harness/ID and never merged. GPT-5.2-Codex / Pro are separate variants. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GPT-5.2 — 百度百科 (release, benchmarks, pricing, retirement, controversies)](https://baike.baidu.com/item/GPT-5.2/67081827)
