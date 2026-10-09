# Mistral Large 4 — findings by Step 5 Preview

- Source: Mistral AI (`mistral-large-4` — "le Chonk", public preview 2026-10-06)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (preview; open-weight MoE, weights announced for end of October 2026)
- **Short description:** Mistral's largest and most capable model — a 1.05T-parameter natively multimodal MoE (52B active, 1.6B vision encoder) trained from scratch on 3,800 Grace Blackwell GPUs in Mistral's own European datacenters, mixing instruction, reasoning and agentic capability in one open-weight model across 160+ languages. Its positioning is vertical sovereignty: state-of-the-art among open models on cybersecurity, finance and law, and — because it ships with weights and reduced-moderation access for vetted partners — able to do vulnerability-reproduction work that closed models refuse (82% on the AA cyber patch test, the highest of any model, while Opus 5.5 and GPT-6 Astra score near zero on refusals). Independent numbers so far: AA Intelligence Index 38 (#64/226), DeepSWE v1.1 61.7%, AutomationBench 59.9%, AA-Briefcase 1,393 Elo, Dense-200 visual grounding 42% (beating GPT-6 Astra's 41%), and a Surge blind human eval where professional annotators ranked its code 2nd of 5 (3.74/5, behind only Claude Opus 5). Caveats: very verbose (200M output tokens per AA Index run), TB 4.0 only 28.3%, and the preview weights had not shipped at research time.
- **Provider / access:** Mistral Studio / preview API (Mistral-operated European deployment under European law); open weights announced for end of October 2026.
- **Release:** 2026-10-06 (public preview).
- **Context window:** 1M tokens per Mistral docs (AA measures 524K served in the preview).
- **Modalities:** Text and image in → text out; function calling, structured outputs, document QnA, agents/conversations APIs.
- **Pricing (as of 2026-10-09):** $1.36/M input, $4.18/M output, $0.07–0.14 cache (Mistral's docs currently show a 50%-off sale: $0.68/$2.09).
- **Speed:** 116.1 tok/s (AA); TTFT 1.46 s.

### Raw benchmarks found

Third-party (artificialanalysis / vals.ai / Surge, as reported by Mistral):

- AA Intelligence Index: **38** (#64 of 226); AA Coding Agent Index: **49.8** (ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max)
- DeepSWE v1.1: **61.7%**; SWE-Atlas-QnA: **59.4%**; Terminal-Bench 4.0: **28.3%**
- AutomationBench (657 business workflows): **59.9%** (ahead of Kimi K3, MiMo-V2.6-Pro, DeepSeek V4 Pro)
- AA-Briefcase (long-horizon knowledge work): **1,393 Elo** (ahead of DeepSeek V4 Pro)
- Dense 200 (visual grounding, bbox): **42%** vs GPT-6 Astra 41%
- SciCode-Verified: SOTA among open-weight models; STEM human-eval preferred over GLM-5.3
- Cybersecurity: AA Cyber Index top-5 globally, #1 non-Chinese open weights; vulnerability patch-reproduce test **82%** (highest of any model — closed leaders refuse); Cybench **93%**
- Surge AI blind coding human eval: **3.74/5**, 2nd of 5 (Claude Opus 5 4.22, GLM-5.3 3.60, Kimi K3 3.59, GLM-5.2 3.40)
- val.ai Finance Agent v2 and Harvey's Legal Agent: exceeds GPT-6-Astra; Harvey's Legal Agent: outperforms all open-source models
- Safety: Lakera B3 attack resistance **93.3%** (no higher competitor score); KORA 1.691 (Mistral's best); higher cyber-refusal rate than all OSS peers

Artificial Analysis (independent summary): Intelligence Index 38, 116.1 tok/s, TTFT 1.46 s, 200M output tokens per index run (very verbose), $1.13 per Index task, 524K context served.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong vertical agentic results — AutomationBench 59.9% (ahead of Kimi K3 and DeepSeek V4 Pro), AA-Briefcase 1,393 Elo, best-in-class legal/finance agent benchmarks — but Terminal-Bench 4.0 at 28.3% and no MCP Atlas/Toolathlon figure keep it below the frontier agentic band.
- **Reasoning: 70/100.** AA Intelligence Index 38 (above its price class's 26 median), SciCode-Verified SOTA among open weights and an internal STEM win over GLM-5.3 — but Mistral published no GPQA/HLE/AIME number, and AA's composite is the only independent overall read.
- **Context window: 82/100.** 1M declared on the docs but 524K measured as served in the preview, with no MRCR/RULER/AA-LCR curve published — the ≥1M band discounted for unverified delivery.
- **Multimodal: 86/100.** Text + image in → text out is the 75–90 band, near its top: a step change in Mistral's vision with Dense-200 grounding beating GPT-6 Astra, gigapixel satellite/engineering-drawing demos, and ChartQA Pro/GDP.pdf strength; no audio/video input or non-text output.
- **Coding: 72/100.** DeepSWE v1.1 61.7%, Coding Agent Index 49.8 (above DS V4 Pro and Qwen3.8 Max) and a 2nd-place blind human eval on code quality — but TB 4.0 28.3% and no SWE-bench figure yet.
- **Cost efficiency: 88/100.** $1.36/$4.18 list (50%-off sale: $0.68/$2.09) with $0.07 cache maps to the methodology's ~$1.25/$4.25 ≈ 88 point; the very high verbosity (200M tokens per index run) is the cost risk.
- **Overall Score: 76/100.** Best-fit recommendation: the sovereign open-weights enterprise model — SOTA open cyber/finance/legal agent work, top-tier visual grounding and a blind-eval #2 on code, from a European stack under European law; a verbosity problem, a TB-4.0 gap, and preview weights still landing.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Mistral Large 4 launch post, Mistral docs model page, Artificial Analysis preview page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mistral_Large_5.md`, using the same headings.
