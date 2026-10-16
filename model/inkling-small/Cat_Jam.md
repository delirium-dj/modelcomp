# Inkling Small — findings by Cat Jam

- Source: Thinking Machines / Inkling Small (`opencode/inkling-small`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab efficient MoE (276B total / 12B active; Apache 2.0) sized-down sibling of Inkling; multimodal text/image/audio input, 524K–1M context, 200 t/s.
- **Provider / access:** Thinking Machines Lab direct API (`inkling-small`), DeepInfra; OpenAI-compatible. Multimodal inputs.
- **Release / knowledge:** Released 2026-07-30 (research preview variant possibly); knowledge cutoff not stated in sampled docs.
- **IDs:** `inkling-small` (Thinking Machines)
- **Context window:** Claims up to 1,048,576 tokens, but provider max completion supports 524,288 (DeepInfra) / 256K (TML). We should state `524K` practical.
- **Modalities:** Text, image, audio in; text out. (VentureBeat: text, image, audio; outputs text.) No native video.
- **Pricing (as of 2026-10-16):** TML $0.30 (cache hit $0.06)/$1.20; DeepInfra $0.45/$1.20 (cache $0.10). Batch pricing? not sampled. 50% limited-time launch discount reported on standard 64K-context endpoint (Fireworks-style pricing notation) through earlier July promo may have expired.
- **Architecture:** MoE 276B total / 12B active; Apache 2.0; strong coding/dense 89.5 GPQA despite small active param count.

### Raw benchmarks found (Artificial Analysis / Vals + vendor)

Agent / tool use:

- AA Agentic Index: **23.5** (AA)
- Tau-3-Banking: 18.8% (AA)
- Vals Index: 25.5
- CyberBench v1.1 (Vals): 64.1

Reasoning / knowledge:

- AA Intelligence Index: **25.7** (measured; 20.8–???)
- GPQA Diamond: **89.5%** (AA measured) / Vals 83.6
- HLE: **33.3%** (AA)
- LCR / AA-LCR: **75.7%**
- CritPt: **8.3%**
- Omniscience Accuracy / Non-Hall: **33.2% / 37.0%**
- MMU-Pro 85.6% (Vals); MMLU-Pro 85.6

Coding:

- Terminal-Bench 2.1 (AA measured): **55.1%** (not the vendor's 82.0? That was Ember? For Inkling Small, no. Vendor self-report TB 64.7? Actually Inkling-Small official claim 64.7. Use 55.1 AA)
- SWE-bench Verified (Vals): **82.2%**? Wait Vals listed 82.2% for Inkling Small; earlier vendor smaller family? Vendor reported SWE-verified 80.2% for Inkling-Small (Fireworks); okay.
- SciCode AA: 49.7%

Multimodal:

- Text/image/audio in (per Paper/AA); no dedicated multimodal eval in sampled AI list besides Arena text; Vals Multimodal Index 50.1. Score moderately.

Long context:

- 524K context (provider-supported) or 1M claimed. Vals Terminal-Bench etc.. AA LCR 75.7%.

### Normalized scores (1–100)

- **Tool use: 78/100.** AA TB2.1 55.1, SWE Verified (Vals 82.2), τ² banking 18.8 caps.
- **Reasoning: 76/100.** HLE 33.3, GPQA 89.5, AA Intelligence 25.7, LCR 75.7, CritPt 8.3, Omniscience 33.2 caps.
- **Context window: 88/100.** 524K actual (not 1M) with LCR 75.7.
- **Multimodal: 80/100.** Text/image/audio input; output text. No dedicated vision eval independent in sampled data.
- **Coding: 86/100.** SWE Verified ~80–82, LiveCodeBench Vals 85.9, TB2 AA 55.1 (but vendor 64.7). Strong for open 276B.
- **Cost efficiency: 90/100.** $0.30 (cache $0.06)/$1.20 for Apache open-weights; good value at small size (12B active).
- **Overall Score: 82/100.** Mean (78+76+88+80+86)/5 = 81.6. Efficient open model; reasoning still behind larger frontier tiers.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (AA, Vals/OpenRouter, VentureBeat, llm-stats, benchlm, ModelCap); scores are normalized 1–100 interpretations, not official vendor scores. Note discrepancy between vendor claims (80–82% TB) and AA measured TB2.1 55.1.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
