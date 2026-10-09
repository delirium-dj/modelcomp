# Mistral Medium 3.5 — findings by Step 5 Preview

- Source: Mistral AI (`mistral-medium-3.5`, model ID `mistral-medium-2604`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5 (`mistral-medium-3.5`, weights `mistralai/Mistral-Medium-3.5-128B`)
- **Short description:** Mistral's "first flagship merged model" — a dense 128B open-weight model (Modified MIT license) that unifies instruct, reasoning and coding in a single set of weights, replacing Mistral Medium 3.1 and Magistral in Le Chat and Devstral 2 in the Vibe coding agent. Reasoner effort is configurable per request, vision uses a custom encoder that handles variable image sizes/aspect ratios, and it can self-host on as few as 4× H100 (FP8, ~128GB weights). Released 2026-04-29.
- **Provider / access:** Mistral API (`mistral-medium-3.5`), Le Chat, OpenRouter, NVIDIA build.nvim/NIM, and Hugging Face open weights.
- **Release:** 2026-04-29 (Artificial Analysis tracks 2026-04-29; OpenRouter listing Apr 30).
- **Context window:** 256K tokens (262,144 in/out).
- **Modalities:** Text and image in → text out; configurable reasoning mode (fast instant-reply or reasoning with test-time compute); native function calling and JSON output; dozens of languages.
- **Pricing (as of 2026-10-09):** $1.50/M input, $7.50/M output (Mistral API; third parties match or add ~10%; self-hostable under Modified MIT, which routes companies above a large-revenue threshold back to Mistral's paid channel).
- **Architecture:** Dense 128B transformer; no parameter/architecture detail beyond that published.

### Raw benchmarks found

Vendor-reported (Hugging Face model card):

- SWE-bench Verified: **77.6%** (ahead of Devstral 2 and Qwen 3.5 397B A17B; behind Gemini 3.1 Pro 78.8% and Claude Sonnet 4.6 79.6%)
- τ³-Telecom: **91.4%**
- LEXam-hard: 31.89

Artificial Analysis (as reported on OpenRouter, current index version):

- Intelligence Index: **14.2** (median of comparable models: 8); Coding Index: **46.9**; Agentic Index: **7.0**
- GPQA Diamond: **74.8%**; HLE: **13.8%**; IFBench: **68.8%**
- τ²-Bench Telecom: **94.2%**; τ-Bench Banking: **15.1%**; GDPval-AA: **13.2%**
- AA-LCR (long-context reasoning): **69.3%**
- SciCode: **40.2%**; Terminal-Bench 2.1: **50.6%**; Terminal-Bench Hard: **33.3%**; Terminal-Bench 4.0: **0.0%**; CritPt: **0.0%**
- AA-Omniscience: accuracy 24.7%, non-hallucination rate 18.4%
- SWE-Bench Pro: **64.3%** (public benchmark data, verified April 2026)

Notably absent from Mistral's launch materials: MMLU, AIME, MMMU, HumanEval, MATH — **no verified public score found** for those.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-Bench Telecom 94.2% and vendor τ³-Telecom 91.4% are strong, and it is explicitly built for agentic work (powers Vibe); pulled back to mid-band by τ-Bench Banking 15.1%, GDPval-AA 13.2% and an Agentic Index of 7.0 — excellent in one domain, weak in others.
- **Reasoning: 62/100.** GPQA Diamond 74.8% and IFBench 68.8% sit in the mid band (60–80% GPQA); HLE 13.8% and Intelligence Index 14.2 cap it below frontier; AA-Omniscience 24.7% accuracy shows knowledge gaps and an 18.4% non-hallucination rate is a real reliability concern.
- **Context window: 73/100.** 256K is the 200K–500K band (worth 65–84), supported by AA-LCR 69.3% — a quarter of the 1M frontier norm, so mid-band.
- **Multimodal: 68/100.** Text + image in → text out is the 60–70 band; the custom vision encoder with variable sizes/aspect ratios is a genuine plus, but Mistral published no MMMU/CharXiv/Video-MME score, so it stays at the top of the image-input band.
- **Coding: 72/100.** SWE-bench Verified 77.6% (vendor) and SWE-bench Pro 64.3% are the strongest dense open-weights coding at release — close to Sonnet 4.6's 79.6%; capped by Terminal-Bench 2.1 50.6%, TB Hard 33.3%, TB 4.0 0.0%, SciCode 40.2% and Coding Index 46.9.
- **Cost efficiency: 78/100.** $1.50/$7.50 per million tokens is mid-priced for the tier (half of Sonnet 4.6's input price, but $7.50 output is dear); open weights under Modified MIT help self-hosters, though the license's large-revenue carve-out pushes big enterprises back to the paid API.
- **Overall Score: 67/100.** Best-fit recommendation: a self-hostable 128B consolidate-everything model — the best open-weights option when you need instruct + reasoning + coding + vision in one deployment on 4 GPUs; as an API it is outclassed on price-performance by Chinese open-weight models at a fifth of the size.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Mistral docs + HF model card, Artificial Analysis via OpenRouter/OpenKey, llm-stats, TechSifted review); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mistral_Large.md`, using the same headings.
