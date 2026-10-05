# Gemma 4 E4B — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemma-4-e4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (effective 4B-class, Matryoshka-style)
- **Short description:** Google DeepMind's on-device-oriented Gemma 4 entry with ~4.5B effective parameters (8B total with embeddings) — the "E4B" successor to Gemma 3n E4B with ~10% relative translation improvement over its predecessor. Top use cases: on-device multimodal assistants and cheap hosted inference.
- **Provider / access:** Hugging Face (Gemma 4 collection, Apache 2.0); Google AI model card (ai.google.dev); hosted listings on pricepertoken and aggregators (llm-stats, BenchLM). Chat-style APIs via Google/hosting providers.
- **Release / knowledge:** April 2026 initial release (BenchLM dates its listing 2026-04-02; model card updated 2026-07-30); knowledge cutoff not published.
- **IDs:** HF `google/gemma-4-E4B` / `gemma-4-E4B-it`; "Gemma 4 E4B IT" on price-per-token listings. No dedicated OpenCode Zen Free ID verified.
- **Context window:** 128K–131,072 tokens (llm-stats/BenchLM listings cite ~131K; the model card generation cites 128K). Verified how: aggregator listings — vendor card value for this variant not directly quoted.
- **Modalities:** text + image + audio input, text output (multimodal on-device positioning); tool calls/JSON mode not documented.
- **Pricing (as of 2026-10-05):** ~$0.020–$0.200 per 1M tokens depending on provider/variant; pricepertoken.com lists E4B IT at $0.200 per 1M input and $0.200 per 1M output. Apache 2.0 weights = free self-hosting/on-device.
- **Architecture:** ~8B total / ~4.5B effective parameters (Matryoshka-style effective sizing carried over from Gemma 3n); Apache 2.0; part of the 2.3B–31B Gemma 4 family (dense E2B/E4B/12B/31B + 26B-A4B MoE).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **85.2%** (Gemma 4 model card, thinking enabled; E2B sibling 82.6% — vendor numbers)
- Technical report E4B rows: **42.0 / 41.0 / 44.8 / 43.0 / 49.4 / 21.9 / 38.2** across a benchmark suite that includes GPQA Diamond (arXiv technical report) — the snippet-level data does not reliably map each value to its named benchmark, so no GPQA attribution is claimed here
- BenchLM overall: **33.2/100**, rank #153 of 210 (marked "Estimated", 2 source rows)
- LLM Stats composite: rank #250
- Translation: ~**+10% relative** vs Gemma 3n E4B (technical report)
- HLE / LCR / MLCR / CritPt: no verified public score found

Coding:

- LiveCodeBench: tracked by aggregators but no value surfaced in the sources reviewed
- SWE-bench Verified / SWE-Pro / SciCode / Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported for E4B

### Normalized scores (1–100)

- **Tool use: 45/100.** Zero agentic or tool benchmarks found anywhere; scored at the sub-floor for a small on-device model with no demonstrated multi-step tool use.
- **Reasoning: 58/100.** MMLU Pro 85.2% with thinking enabled is the bright spot (vendor-measured); capped hard by the unmapped technical-report rows (upper-30s/low-40s range for at least one hard-reasoning benchmark), BenchLM's estimated 33.2 composite, and LLM Stats rank #250.
- **Context window: 62/100.** ~131K tokens is an entry-tier window by 2026 standards; no retrieval verification.
- **Multimodal: 60/100.** Text + image + audio input is unusually complete for the size class; no measured vision/audio benchmark values were found, so breadth is credited unproven.
- **Coding: 45/100.** No published coding benchmark value (LiveCodeBench tracked but unsurfaced, no SWE-bench); BenchLM's estimated 33.2 composite suggests below-average coding for the field.
- **Cost efficiency: 92/100.** $0.20/1M flat hosted, free Apache 2.0 weights, and on-device capability make it cheap to run anywhere; short of top marks because per-provider pricing varies and throughput on small accelerators is undocumented.
- **Overall Score: 54.0/100.** Mean of the five quality dims (45 + 58 + 62 + 60 + 45) / 5. Best fit: on-device or ultra-cheap multimodal (including audio) assistants — not agentic, coding, or long-document work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (Google AI model card, Gemma 4 technical report via arXiv, BenchLM, llm-stats, pricepertoken, aurigait); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
