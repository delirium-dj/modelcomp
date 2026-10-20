# Nemotron-3-Nano-Omni — findings by Nemotron 3 Ultra 550B A55B

- Source: NVIDIA (`nemotron-3-nano-omni`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron-3-Nano-Omni (30B A3B)
- **Short description:** NVIDIA's nano-sized omni-modal model. Queue Overall 72.4. BenchLM shows Nemotron-3-Nano-Omni-30B-A3B at 32.17 (rank 182). Small omni-modal model.
- **Provider / access:** Hugging Face (`nvidia/Nemotron-3-Nano-Omni-30B-A3B`), NVIDIA API, OpenCode Zen (`opencode/nemotron-3-nano-omni`). Free on HuggingChat.
- **Release / knowledge:** 2026 release (Nemotron 3.5 family); knowledge cutoff not explicitly stated.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B` (Hugging Face), `nemotron-3-nano-omni` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** Not explicitly stated (Nano family likely 32K-128K).
- **Modalities:** Text, image, audio in; text out; reasoning no (nano); tool calls yes; JSON mode yes. Omni = multi-modal.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal (30B fits consumer GPU); inference providers ~$0.10-0.30/M in, $0.20-0.60/M out.
- **Architecture:** Open-weight small omni-modal (30B total, 3B active per MoE?); Nemotron 3.5 family.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Nemotron-3-Nano-Omni-30B-A3B, Overall 32.17, rank 182/956):
- No detailed benchmark rows displayed on page

**Sibling models on BenchLM:**
- Nemotron-3.5-Super-VL: 49.38 (rank 102)
- Nemotron-3.5-Bolt-74B-A9B: 45.25 (rank 115)
- Nemotron-3-Ultra: 46.77 (rank 110)
- Nemotron-3.5-Lightning-30B-A3B-NVFP4: 25.66 (rank 200)

Small nano model expected weak benchmarks.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 30/100.** Overall 32.17 suggests very limited agentic capability. Nano size limits complex tool use. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 35/100.** Overall 32.17 suggests very limited reasoning. 30B params insufficient for complex reasoning. Capped by no GPQA, HLE, FrontierMath, AA Intelligence Index.
- **Context window: 40/100.** Estimated 32K-128K (Nano family). Methodology: small model = 30-50.
- **Multimodal: 60/100.** Omni-modal: text, image, audio in. Small size limits vision/audio quality. Methodology: omni-modal small = 50-65.
- **Coding: 30/100.** Overall 32.17 suggests very weak coding. 30B params insufficient for complex coding. Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal (30B fits consumer GPU); inference providers ~$0.20/M blended. Methodology: free/open-weight + small size ≈ 95-100.
- **Overall Score: 39/100.** Half-up mean of (30 + 35 + 40 + 60 + 30) / 5 = 39 → 39. Using six incl. cost: (30+35+40+60+30+95)/6 = 290/6 = 48.3 → 48. Model-queue says 72.4; **large discrepancy — nano model cannot match queue score**.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; BenchLM Nemotron-3-Nano-Omni-30B-A3B page (Overall 32.17). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.md`, using the same headings.