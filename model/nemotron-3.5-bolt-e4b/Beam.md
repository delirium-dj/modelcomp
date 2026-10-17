# Nemotron 3.5 Bolt E4B — findings by Beam

- Source: NVIDIA/Nemotron 3.5 Bolt E4B, `nvidia/nemotron-3.5-bolt-e4b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's edge model (Oct 23, 2026): 4B effective, 4GB. Text/image/audio/video in. Coming soon (not yet released as of Oct 15, 2026). BenchLM not computed (0 benchmarks). Open weights (pending).
- **Provider / access:** HuggingFace (pending); Ollama (pending); LM Studio (pending).
- **Release / knowledge:** Announced 2026-10-15; available Oct 23, 2026. Knowledge cutoff May 2026.
- **IDs:** `nvidia/nemotron-3.5-bolt-e4b`
- **Context window:** Not published (likely 128K-256K).
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calling yes. Open weights (pending).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** 4B effective, optimized for intelligence per GB, 4GB memory. Edge model for physical and conversational agents. OpenMDW license.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. BenchLM not computed (0 benchmarks).

Reasoning / knowledge:

- Reasoning: no verified public benchmarks. BenchLM not computed.

Coding:

- Coding: no verified public benchmarks. BenchLM not computed.

Long context:

- Context window: not published.

Multimodal:

- Text/image/audio/video in; no verified multimodal benchmarks.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified agentic benchmarks; provisional (not yet released, 0 benchmarks).
- **Reasoning: 40/100.** No verified reasoning benchmarks; provisional.
- **Context window: 50/100.** Context size not published; provisional.
- **Multimodal: 50/100.** Text/image/audio/video in; provisional.
- **Coding: 40/100.** No verified coding benchmarks; provisional.
- **Cost efficiency: 100/100.** Free (open weights, 4GB).
- **Overall Score: 44/100.** Provisional mean; low-confidence (zero verified benchmarks, not yet released). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (NVIDIA official blog, BenchLM); no verified public benchmarks found. Bolt E4B announced Oct 15, 2026, available Oct 23, 2026. Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Nemotron 3.5 Bolt E4B has zero verified benchmarks, candidate for exclusion.)