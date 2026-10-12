# GPT-6 Luna — findings by Kimi K3

- Source: OpenAI / GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's lightest GPT-6 variant (siblings Astra/Sol) — cheap, fast reasoning with 1.1M context; the entry point to GPT-6 and a top-15 OpenCode model by weekly tokens. Docs: developers.openai.com/api/docs/models/gpt-6-luna.
- **Provider / access:** OpenAI API (`gpt-6-luna`, OpenAI-compatible); OpenCode Zen route live (#11 by tokens, 71.9% weekly retention).
- **Release / knowledge:** Released 2026-09-22 (OpenCode Data, newly verified — first pass had "September 2026, date not verified"); knowledge cutoff 2026-05-18 (OpenCode Data, new).
- **IDs:** `openai/gpt-6-luna` (no Zen Free ID verified).
- **Context window:** 1.1M tokens (OpenCode Data; benchlm.ai listed 1.05M); max output **128K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/PDF in (OpenCode Data; AA-MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** **$0.10/M input, $0.50/M output, $0.01/M cached input, $0.13 cache write** (OpenCode Data catalog — verified now; OpenAI's cheapest current reasoning model by a wide margin).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **43.4%** normalized (benchlm.ai)
- GDP.pdf (all-pass): **20.4%**; ExploitGym: **11.6%** (benchlm.ai)
- Terminal-Bench / Tau2/Tau3 / Claw-Eval / OSWorld: no verified public score found

Reasoning / knowledge:

- AA-LCR: **83.3%**; CritPt: **19.4%** (benchlm.ai)
- ARC-AGI-1: **86.7%**; ARC-AGI-2: **59.3%**; ARC-AGI-3: **0.1%** (benchlm.ai)
- AA-HLE: **38.5%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **37.3**; BenchLM overall **66.59/100, #22 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **43.8% / 76.7%** (benchlm.ai)
- HealthBench: **50.0%** raw / 54.5% length-adj; HealthBench Hard: **31.4%** (benchlm.ai)
- GPQA: no verified public score found

Coding:

- DeepSWE: **66.6%** (official openai.com/index/introducing-gpt-6-sol-and-luna/ via OpenCode Data — confirmed against benchlm.ai's 66.6%); AA-SciCode: **54.6%** (benchlm.ai)
- SWE-bench / LiveCodeBench / Coding Index: no verified public score found

Long context:

- AA-LCR 83.3% at the ~1.1M window (benchlm.ai); 128K output catalog-verified; no MRCR/RULER rows.

Multimodal:

- AA-MMMU-Pro: **75.5%** (benchlm.ai); PDF input catalog-listed (new this pass)

### Normalized scores (1–100)

- **Tool use: 60/100.** Unchanged: GDPval 43.4% only signal; capped by missing TB/Tau/OSWorld coverage.
- **Reasoning: 78/100.** Unchanged: LCR 83.3%, ARC-AGI-2 59.3%, AA Index 37.3; capped by CritPt 19.4% and ARC-AGI-3 0.1%.
- **Context window: 86/100.** Unchanged: 1.1M window with LCR 83.3%; 128K output verified; capped by missing max-window probes.
- **Multimodal: 72/100.** Unchanged: MMMU-Pro 75.5% image/PDF input; no audio/video; text-only output.
- **Coding: 70/100.** Unchanged: DeepSWE 66.6% (official-confirmed), SciCode 54.6%; capped by absence of SWE-bench/LiveCodeBench rows.
- **Cost efficiency: 95/100.** Raised from provisional 80: verified $0.10/$0.50 with $0.01 cached — the cheapest frontier-family OpenAI model, priced at budget-Flash level while keeping the 1.1M window.
- **Overall Score: 73/100.** Mean of the five quality dims (60+78+86+72+70)/5 = 73.2 → 73 (unchanged). Best fit: entry GPT-6 access for long-context chat and moderate coding at ultra-low price; agentic depth should use Sol/Astra.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official openai.com/index/introducing-gpt-6-sol-and-luna/ DeepSWE row transcribed by OpenCode Data `openai/gpt-6-luna` incl. verified release/cutoff/pricing and live usage; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release (2026-09-22), cutoff (2026-05-18), 128K output and the $0.10/$0.50 catalog price. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
