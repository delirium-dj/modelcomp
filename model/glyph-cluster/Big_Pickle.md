# Glyph Cluster — findings by Big Pickle

- Source: Anonymous (Vercel AI Gateway)/Glyph Cluster
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster
- **Short description:** An anonymous stealth model served through Vercel AI Gateway since 7 October 2026, positioned for coding and long-context analysis. Stealth Models' tokenizer and failure-pattern research points to Microsoft's MAI family (it shares MAI's `o200k_base` tokenizer and scores slightly above MAI Thinking 1), but no lab has confirmed the identity.
- **Provider / access:** Vercel AI Gateway (`stealth/glyph-cluster`, OpenAI-compatible at `https://ai-gateway.vercel.sh/v1/chat/completions`), plus Command Code Go. Not on OpenCode Zen.
- **Release / knowledge:** First seen 2026-10-07; knowledge cutoff not disclosed.
- **IDs:** `stealth/glyph-cluster`; no free Zen ID.
- **Context window:** 256,000 total (Stealth Models spec sheet + models.dev).
- **Modalities:** text in / text out; reasoning yes (`reasoning.effort` low/medium/high/xhigh); tool calls yes; no image/audio/video input.
- **Pricing (as of 2026-11-11):** $0 during the stealth preview on Vercel AI Gateway (Pro/Enterprise teams need purchased Gateway credits). Prompts and completions may be retained and used for training; zero data retention is unavailable.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

All rows are Stealth Models' independent StealthMark runs (8–25 October 2026) — original tasks the model could not have trained on, not vendor claims.

Agent / tool use / planning:

- StealthMark overall: **18.9/100**, rank **53 of 57**
- General Intelligence: **12.0/100**
- Foresight (anticipation, 3 levels): **6.4/100**, rank 50/53 — survived 0 of 3
- Latch (cooperative planning, 5 levels): **3.6/100**, rank 50/54 — cleared 1 of 5
- Reasoning efficiency: single-step **77** (rank 6/55), multi-step **35** (rank 30/53)
- Output speed: **69 tokens/s** (faster than 6 of 50 measured models)

Reasoning / knowledge:

- GPQA Diamond: **56.4%** (31/55) on Stealth Models' 55-question subset; **56.0%** (28/50) on the common 50-question comparison set
- No HLE, AIME, LCR, CritPt or AA Intelligence Index result found.

Visual construction (SVG tasks, 0–100):

- Selfie: **32.4** (rank 54/57)
- Mona Lisa: **11.7** (rank 52/57)
- Beach: **46.3** (rank 46/57)
- Newton's Mirror: **12.8** (rank 51/57)
- Ground Truth: **19.9** (rank 52/57)
- Raccoon: **35.7** (rank 52/57)
- Pelican: **44.3** (rank 50/57)
- Visual Intelligence: **29.8/100**

Coding:

- SWE-bench Verified / Pro, DeepSWE, LiveCodeBench, SciCode, Terminal-Bench: no verified public score found.

Multimodal:

- None — text-only endpoint.

Long context:

- No MRCR / RULER / GraphWalks retrieval result published; the 256K window is unmeasured at length.

### Normalized scores (1–100)

- **Tool use: 25/100.** Tool calls are supported, but the only agentic evidence is two planning games (Foresight 6.4, Latch 3.6) and a General Intelligence score of 12.0 — there is no Terminal-Bench, Tau or SWE-agent row.
- **Reasoning: 35/100.** GPQA 56.4% is a real mid-tier signal, but the near-floor planning scores and 12.0 General Intelligence show the reasoning does not carry over to multi-step tasks.
- **Context window: 72/100.** 256K total, just above the 200K = 70 anchor in the 200K–500K band.
- **Multimodal: 15/100.** Text-only input and output; no vision or document path.
- **Coding: 30/100.** Marketed for coding and long-context analysis, but no standard coding benchmark exists; the SVG construction results (11.7–46.3) are the only measurable generation evidence.
- **Cost efficiency: 100/100.** $0 model tokens during the stealth preview — with the explicit caveat that prompts and completions may be retained and used for training.
- **Overall Score: 35/100.** (25 + 35 + 72 + 15 + 30) / 5 = 35.4 → 35. Best fit: free experimentation with long-context text analysis, not production coding or agentic work.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (Stealth Models model guide and StealthMark benchmark page, Vercel AI Gateway model listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Stealth Models — Glyph Cluster guide](https://stealthmodels.com/glyph-cluster)
  - [Stealth Models — Glyph Cluster benchmark results](https://stealthmodels.com/benchmarks/models/glyph-cluster)
  - [Vercel AI Gateway — stealth/glyph-cluster](https://ai-gateway.vercel.sh/v1/chat/completions)
- Future sources: add a new file next to this one, e.g. `Glyph_Cluster_Update.md`, using the same headings.
