# Qwen3.7-Plus — findings by Grok 4.6

- Source: Alibaba / Qwen (`qwen3.7-plus`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Alibaba's June 2026 cost-effective Qwen3.7 multimodal agent SKU: text/image/video in, GUI/mobile-use positioning, 1M context. Functionally equivalent to snapshot `qwen3.7-plus-2026-05-26`. Proprietary.
- **Provider / access:** Alibaba Cloud Model Studio Chat Completions, ID `qwen3.7-plus`. QwenCloud model page. International (Singapore) is the USD list used below.
- **Release / knowledge:** Released 2026-06-01 (Artificial Analysis). Snapshot dated 2026-05-26. Knowledge cutoff not on the Model Studio page.
- **IDs:** `qwen3.7-plus`; snapshot `qwen3.7-plus-2026-05-26`. No OpenCode Zen Free ID found.
- **Context window:** 1,000,000 total; max input 991,808 (thinking 983,616); max output 131,072; max chain-of-thought 262,144 (Alibaba help, 2026-10-11).
- **Modalities:** Image, text, video in; text out; function calling, structured output, web search, prefix completion, context caching (Singapore/China/etc.).
- **Pricing (as of 2026-10-20):** Singapore ≤256K: $0.40 / $1.60 per 1M in/out; implicit cache $0.08; explicit cache create $0.50 / read $0.04. Above 256K: $1.20 / $4.80. AA matches $0.40/$1.60 with 80% cache discount.
- **Architecture:** Proprietary; parameter count undisclosed (AA).

### Raw benchmarks found

Agent / tool use:

- OSWorld Verified: **73.3%** (Alibaba launch via Benchmark Registry; `enable_thinking=False` row)
- AutomationBench 1.0.6: **3.7%** (Zapier independent, 2026-10-07)
- Finance Agent v2: **38.2%** (Vals AI, 2026-10-06)
- Harvey Legal Agent Benchmark: **0.0%** (Vals, 2026-10-06)
- Tau3-Banking / Terminal-Bench / Claw-Eval / GDPval-AA: **no verified public score found** on the pages fetched (AA Index page does not expose numeric TB/GDPval in HTML)

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (Alibaba launch, 2026-06-03)
- GPQA Diamond (Epoch AI harness): **81.8%** (effort none) and **87.9%** (default), evaluated 2026-08-07
- Artificial Analysis Intelligence Index: **25** (AA model page, v4.3.2 class)
- IFBench: **79.1%**; MMLU-Pro: **88.5%**; MMMLU: **89.0%** (Alibaba launch)
- MATH-Vision: **90.3%**; MedXpertQA MM: **71.0%** (Alibaba)
- Chartography: **15.8%** Pass@1 thinking-on (Surge AI, 2026-10-07)
- HLE / CritPt / LCR: **no verified public numeric score found** on AA HTML (charts only)

Coding:

- SWE-bench Verified: **77.7%** (Benchmark Registry citation of Alibaba launch — confirm against original post if wiring a production gate)
- SWE-bench Multilingual: **75.8%** (same registry synthesis)
- LiveCodeBench / SciCode / DeepSWE / TB 2.1: **no verified public score found** in the fetched docs

Long context:

- 1M advertised. **no verified public MRCR / RULER / GraphWalks score found**

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor OSWorld 73.3% is mid-high, but independent AutomationBench 3.7%, Finance Agent 38.2%, and legal 0% show weak portable agents. Capped hard by those independent zeros/lows and missing TB/Tau3.
- **Reasoning: 78/100.** Vendor GPQA 90.3% and Epoch 87.9% are frontier-adjacent, but AA Index 25 is a mid (20–35) composite and Chartography 15.8% is weak. Capped by the Index/GPQA split and missing HLE.
- **Context window: 96/100.** 1M / 131K out is the ≥1M tier. Not 100: no ≥98% retrieval at 512K+; >256K input triples the list price.
- **Multimodal: 82/100.** Image+video in is the 75–90 band. Capped by text-only output and no audio.
- **Coding: 80/100.** Launch SWE-Verified 77.7% / multilingual 75.8% are solid mid-high. Capped by no TB/DeepSWE/SciCode and no independent coding harness in the fetch.
- **Cost efficiency: 91/100.** International $0.40/$1.60 sits near the ~$0.60/$2.20 ≈ 92 anchor. Long-context $1.20/$4.80 is closer to the $1.25/$4.25 ≈ 88 band — score uses the ≤256K list.
- **Overall Score: 82/100.** Mean of 72 + 78 + 96 + 82 + 80 = 81.6 → 82 half-up. Best fit: cheap-ish hosted multimodal chat with strong GPQA; not a default agent until AutomationBench/legal numbers move.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (Alibaba Model Studio, Artificial Analysis, Benchmark Registry/Epoch/Vals/Zapier citations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
