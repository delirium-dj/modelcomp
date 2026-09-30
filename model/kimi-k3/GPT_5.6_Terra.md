# Kimi K3 — findings by GPT-5.6 Terra

- Source: Moonshot AI / Kimi K3
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight 2.8T-parameter MoE model for long-horizon coding, agentic work, reasoning, and vision.
- **Provider / access:** Moonshot/Kimi hosted API and open weights; reported provider model ID `moonshotai/kimi-k3`.
- **Release / knowledge:** 2026-07-27 technical-report publication; knowledge cutoff not verified in the primary source reviewed.
- **IDs:** `moonshotai/kimi-k3`.
- **Context window:** 1M tokens (Kimi K3 technical report).
- **Modalities:** Native vision is documented; public primary source reviewed does not establish the complete production input/output modality matrix.
- **Pricing (as of 2026-09-18):** $3 input / $0.30 cached input / $15 output per 1M tokens, reported by provider listings; no free tier verified.
- **Architecture:** Open-weight 2.8T MoE; 104B active parameters, 16 of 896 routed experts active per token; Kimi Delta Attention, Attention Residuals, and Stable LatentMoE (Kimi technical report).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Kimi K3 model card reproduced in Kempner Institute's HPC Agentic Recipes; Kimi Code harness caveat noted).
- FrontierSWE: **81.2%**; ProgramBench: **77.8%**; DeepSWE: **67.5%**; SWE-Marathon: **42.0%** (Kimi K3 card reproduced in Kempner Institute's HPC Agentic Recipes; Kimi Code harness caveat noted).

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Kimi K3 model card reproduced in Kempner Institute's HPC Agentic Recipes; Kimi Code harness caveat noted).
- Artificial Analysis Intelligence Index: **57** (third-party comparison reported in contemporaneous coverage; rank #4 of 189 in that snapshot).

Coding:

- Frontend Code Arena: **1679** (reported in contemporary coverage of Moonshot's launch; blind developer evaluation). Vendor technical-report abstract gives no individual coding score.
- SWE-bench Verified: **76.8%**; Terminal-Bench 2.1: **88.3%** (CanItRun model summary). LiveCodeBench: **74.7%** and SciCode: **58.7%** (LLMPodium coding leaderboard). These are third-party reported rows, not values supplied in the Kimi technical report.

Long context:

- 1M-token context is documented in the Kimi K3 technical report; no public MRCR, RULER, or GraphWalks retrieval result was located.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 88.3%, FrontierSWE at 81.2%, ProgramBench at 77.8%, and DeepSWE at 67.5% support a frontier agentic score; the Kimi Code harness and incomplete independent replication cap it.
- **Reasoning: 91/100.** GPQA Diamond at 93.5% and an Artificial Analysis Intelligence Index of 57 support a high reasoning score; the published figures have mixed first- and third-party provenance.
- **Context window: 95/100.** The 1M context and attention design support a high score, capped by lack of published retrieval measurements.
- **Multimodal: 75/100.** Native vision is verified; the incomplete published modality matrix caps the score.
- **Coding: 91/100.** Terminal-Bench 2.1 at 88.3%, FrontierSWE at 81.2%, SWE-bench Verified at 76.8%, LiveCodeBench at 74.7%, DeepSWE at 67.5%, and the 1679 Frontend Code Arena result form a broad coding record; different harnesses and third-party aggregation cap it.
- **Cost efficiency: 57/100.** Open weights and cache pricing help, but $3/$15 per 1M tokens is materially above low-cost open-model pricing.
- **Overall Score: 88/100.** Mean of Tool, Reasoning, Context, Multimodal, and Coding: (88 + 91 + 95 + 75 + 91) / 5 = 88.0; a high-potential open-weight option whose mixed-provenance public benchmark disclosure still requires careful comparison.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: Fresh public-web research, emphasizing the Kimi Team technical report; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
