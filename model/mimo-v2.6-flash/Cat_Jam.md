# MiMo-V2.6-Flash — findings by Cat Jam

- Source: Xiaomi / MiMo-V2.6-Flash (`opencode/mimo-v2-6-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficient native-omnimodal sparse MoE (309B total / 15B active; 1M context) as the fast, low-cost tier beneath Pro. MIT weights, ultra-low API pricing.
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.6-flash`), many LiteLLM providers, self-host open weights (MIT). Text/image/video/audio in; text out.
- **Release / knowledge:** Released 2026-09-21 (public RL run 2026-09-15); knowledge cutoff not stated in sampled docs.
- **IDs:** `mimo-v2.6-flash` (Xiaomi)
- **Context window:** 1,048,576 tokens; max output 131,072. Verified via multiple provider docs.
- **Modalities:** Text, image, video, audio in; text out. Tool calling, JSON mode, web search, structured output, context caching. (Xiaomi reports speculative decoding 2.5–3.7× but vendor claim.)
- **Pricing (as of 2026-10-16):** $0.14 (cache hit $0.0028) / $0.28 per 1M; low-cost tiers through many providers ($0.10). No hosted free tier; weights MIT self-host possible.
- **Architecture:** Sparse MoE 309B total / 15B active; 256 routed experts (8 active), hybrid attention; open MIT. Promised self-host needs multi-GPU.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (AA): **22.7%** (very low on AA harness)
- Vals AI Terminal-Bench 4.0: 24.2%
- Xiaomi own: DeepSWE 67.9, MiMo Code Bench 61.2, MiMo Cyber Bench 77.2, MiMo Visual Coding 71.x? (llmboard has partial)
- CyberGym? Not in sampled AA page (Pro had 94.0 flash? no)
- Vals Vals Index 53.2, CyberBench 75.4, ProgramBench 0.5 etc (vendor own eval suites)

Reasoning / knowledge:

- AA Intelligence Index: **38.0** (measured)
- AA-HLE: **35.1%**
- AA-LCR: **74.3%**
- AA-GPQA? Not in AA table (see benchgap estimated GPQA Diamond? not in sampled AA list for Flash; LLMBoard AA not present). Mark "not published by AA in sampled page"
- CritPt: **12.0%**
- AA-Omniscience Accuracy: **27.0%** / Non-Hallucination 45.6%
- MMLU etc. not in sampled official docs

Coding:

- AA-SciCode: 51.3%
- Vals LiveCodeBench? not sampled
- DeepSWE vendor 67.9
- ProgramBench vendor 26.0
- TB4 vendor measured via AA 22.7
- SWE-bench? no standard independent number for flash

Long context:

- AA not providing long-context retrieval for Flash? "1M prompt window; AA-LCR 74.3%." Strong enough.

### Normalized scores (1–100)

- **Tool use: 72/100.** AA TB4 22.7 very low, but vendor DeepSWE 67.9/ProgramBench 26.0/OSWorld? Hacker? No independently verified OSWorld score. Provide independent-AA-driven score; caps.
- **Reasoning: 74/100.** HLE 35.1, AA Index 38, LCR 74.3, CritPt 12.0, Omniscience 27.0. Low-mid reasoning, cap.
- **Context window: 92/100.** 1M context; AA-LCR 74.3 suggests moderate retrieval quality.
- **Multimodal: 80/100.** Native text/image/video/audio per Xiaomi; OSWorld score unknown; Vals multimodal? not sampled.
- **Coding: 78/100.** AA TB4 22.7 is low; vendor DeepSWE 67.9 and AA-SciCode 51.3. Cost-efficient coding.
- **Cost efficiency: 98/100.** $0.14/$0.28 with MIT weights; among cheapest.
- **Overall Score: 79/100.** Mean (72+74+92+80+78)/5 = 79.2. Ultra-cheap flash with moderate intelligence; flash is not close to Pro's #1 open ranking.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Xiaomi docs, Artificial Analysis, OpenRouter, llmboard, HokAI, BenchGecko); scores are normalized 1–100 interpretations, not official vendor scores. Heavy vendor self-reporting and absence of GPQA/SWE for Flash temper claims.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
