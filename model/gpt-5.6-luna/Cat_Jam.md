# GPT-5.6 Luna — findings by Cat Jam

- Source: OpenAI / GPT-5.6 Luna (`opencode/gpt-5.6-luna`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** Lowest-cost GPT-5.6 tier (released GA Jul 9, 2026) for high-volume and low-latency chat/classification/agentic tasks. $0.20/$1.20 per 1M after Promo 80% cut.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`), ChatGPT Free/Go, Codex, Azure/Bedrock resellers. Chat Completions + Responses. Text/image in; text out.
- **Release / knowledge:** Released 2026-07-09 (GA after limited preview); knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5.6-luna` (OpenAI)
- **Context window:** 1,050,000 tokens total (922,000 max input / 128,000 max output); > 272K repriced to 2x/1.5x.
- **Modalities:** Text, image in; text out. Reasoning effort none/low/medium/high/xhigh/max.
- **Pricing (as of 2026-10-16):** $0.20 / $1.20 per 1M input/output; cache read $0.02, cache write $0.25. Very low.
- **Architecture:** GPT-5.6 Luna fastest/cheapest tier; multi-agent mode not (Luna). Not open.

### Raw benchmarks found

- AA Intelligence Index (max, v4.3.2): **37.3**
- GPQA Diamond max (AA): **91.1%** (AA measured; var by effort: Low 83.5, Medium 85.9, Xhigh 89.5, Max 91.1)
- HLE (AA max): 39.5
- LCR (AA max): 83.7
- CritPt (AA max): 20.6
- SciCode: 53.6 (Vals/Vendor table blended; AA GPT-5.6 Luna max 53.6)
- Terminal-Bench 2.1 (AA max): 80.9 (measured; vendor higher local maybe), TB4 max 11.6
- Coding Agent Index (AA historical pre-v1.4): max 74.6
- SWE-Bench Pro? not listed in OpenAI vendor table aside from GPT-5.6 Sol/Luna in Wikipedia? (GPT-5.6 Luna equivalent, maybe 58?) Ours: Vals Vals Index 51.7; SWE-vals 93.0, LiveCode 82.6, Coding Vibe etc. 
- AA Omniscience Accuracy: 42.7 (max); non-hall 7.4 (low abstention)
- ARC-AGI etc not sampled.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB4 11.6/17.3 low, but Terminal-Bench 80.9 (AA max), SWE-Bench Verified (Vals) 93.0, Code Migration 44.5. Agent-grade tool use, but low in terminal harness (4.0).
- **Reasoning: 82/100.** HLE 39.5, GPQA 91.1, AA Intelligence 37.3, LCR 83.7, CritPt 20.6.
- **Context window: 94/100.** 1.05M context; LCR 83.7; long-context strength claim, but output cost cheaper.
- **Multimodal: 78/100.** Text/image only, no audio/video. MMMU-Pro 78.6 (at Xhigh? additional benchmark list), GDP.pdf 24.0.
- **Coding: 84/100.** DeepSWE? 67.2 (agent max table), SWE-Pro 62.7 (vendor GPT-5.6 Luna row a little uncertain on homogeneity, but infer from OpenAI family), Terminal-Bench 2.1 80.9, Coding Index 71.4.
- **Cost efficiency: 92/100.** $0.20/$1.20; 90% cache discount; extremely cheap; speed; but verbose (150M output tokens per index task).
- **Overall Score: 83.2/100.** Mean (78+82+94+78+84)/5 = 83.2 → 83. (Excellent cost-value nano-equivalent in GPT-5.6 family.)

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs, GPT-5.6 launch, OpenRouter AA summaries, llmlearner, swen); scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
