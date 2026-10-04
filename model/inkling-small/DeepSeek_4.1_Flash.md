# Inkling Small — findings by DeepSeek 4.1 Flash

- Source: Thinking Machines / Inkling Small (`opencode/inkling-small`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines' smaller Inkling variant — a 1M-context, open-weights (Apache 2.0) multimodal model that accepts text, image and audio and supports tool calling and reasoning.
- **Provider / access:** `opencode/inkling-small`; also OpenRouter (`thinkingmachines/inkling-small`, `inkling-small:free`), DeepInfra, Baseten and Hugging Face (`thinkingmachines/Inkling-Small`, plus `unsloth/inkling-small-gguf`). Tool calling + reasoning per OpenRouter.
- **Release / knowledge:** Released 2026-07-30 (Thinking Machines announcement). Knowledge cutoff not published.
- **IDs:** `opencode/inkling-small`.
- **Context window:** 1,000,000 tokens (OpenCode model catalog + Sophon/Artificial Analysis). **Caveat:** the folder's `meta.json` (`scaffolded: true`) still carries a placeholder "128K total" — the live catalogues say 1M, which I scored on.
- **Modalities:** Text, image and audio in; text out (OpenCode catalog). Reasoning + tool calls.
- **Pricing (as of 2026-10-03):** $0.30 in / $1.20 out per 1M (Artificial Analysis; DeepInfra and Thinking Machines $0.45/$1.20); cache read $0.10. ~207 tokens/s.
- **Architecture:** Open weights, Apache 2.0, downloadable. Parameter count not disclosed in the sources I could read.

### Raw benchmarks found

> Sources: Sophon (Artificial Analysis / Vals AI / EQ-Bench rows) and Vector Wire (thinkingmachines.ai vendor rows + independent harnesses). 71 tracked results on 48 benchmarks across 12 sources per Vector Wire.

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (Sophon, #50/511)
- HLE: **33.3%** (Sophon); HLE (with tools): **47.80%** (vendor)
- Vals Index: **25.5** (Sophon)
- SAGE: **32.7** · ProofBench: **6** (Sophon)

Agent / tool use:

- Toolathlon: **54.40%** (vendor, verified)
- τ³-Bench Banking: **23.70%** (vendor) / **15.50%** (api.llm-stats.com)
- Finance Agent (v2): **41.3** (Sophon)

Coding:

- SWE-bench Pro (Public): **55.90%** (vendor)
- SciCode: **49.7%** (Sophon)
- Vibe Code Bench v1.1: **19.1%** (Sophon)
- MedCode: **37.9%** (Sophon)

Multimodal:

- MMAU (audio understanding): **77.00%** (vendor)
- MMMU Pro (Standard 10): **74.00%** (vendor)
- Vals Multimodal Index: **50.1** (Sophon)
- VoiceBench: **91.40%** · MedScribe: **84.1** (Sophon)

Domain / finance:

- CorpFin v2: **69.6** · TaxEval v2: **75.5** · MortgageTax: **62.3** (Sophon)

Other:

- EQ-Bench Creative Writing v3: **1491.4** · StrongREJECT: **98.60** (Sophon)

Long context:

- 1.0M context; Vector Wire rates it "capable in long context" (−17.9% vs the leader) with 1 of 3 long-context benchmarks measured; no RULER/MRCR curve published.

### Normalized scores (1–100)

- **Tool use: 64/100.** Toolathlon 54.40% and Finance Agent (v2) 41.3 are mid-high, but τ³-Bench Banking 23.70% and Vector Wire's "behind the leaders in agentic" verdict hold it mid.
- **Reasoning: 80/100.** GPQA Diamond 89.5% is near-frontier (90%+ band) and HLE 33.3% / HLE-with-tools 47.80% are solid; Vals Index 25.5 (mid) caps it below the top band.
- **Context window: 95/100.** 1M tokens is the ≥1M tier (95–100); scored at the lower end with no ≥98% retrieval evidence at 512K+.
- **Multimodal: 90/100.** Text, image **and audio** input → the "+audio in" band (90–100); MMMU-Pro 74.00% and MMAU 77.00% back genuine cross-modal capability, though Vals Multimodal Index 50.1 keeps it at the lower end.
- **Coding: 72/100.** SWE-bench Pro 55.90% and SciCode 49.7% are strong mid/high, but Vibe Code Bench v1.1 19.1% and MedCode 37.9% cap the score.
- **Cost efficiency: 93/100.** $0.30 in / $1.20 out per 1M (~$0.10/$0.20 = 97–99 band, adjusted for the output rate and the $0.45 routes).
- **Overall Score: 80/100.** (64 + 80 + 95 + 90 + 72) / 5 = 80.2 → **80**. Best-fit: open-weights 1M-context multimodal (audio-capable) model for reasoning and long-context work at a low price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-03
- Method: independent public internet research (Sophon, Vector Wire Artificial Analysis + vendor rows, OpenCode model catalog, BenchLM). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
