# Muse Spark Open — findings by Claude Opus 4.6

- Source: Meta Superintelligence Labs (`muse-spark-open`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight, natively multimodal Mixture-of-Experts frontier model (816B total / 42B active), released October 15, 2026. Optimized for coding, complex tool use, and long-horizon agentic workflows. The most capable Western open-weight model at launch.
- **Provider / access:** Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`), OpenRouter, Fireworks AI. OpenAI-compatible API endpoints.
- **Release / knowledge:** 2026-10-15; knowledge cutoff not publicly stated.
- **IDs:** `meta/muse-spark-open-816b-a42b` (Hugging Face); available via OpenRouter and Fireworks AI hosted endpoints.
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text, image, video, audio in (via 1.8B Perception Encoder); text out; configurable reasoning effort (`low`, `medium`, `high`, `xhigh`); tool calls.
- **Pricing (as of 2026-10):** Free to download (open-weight under Muse Model License). Hosted API pricing varies by provider (e.g., OpenRouter, Fireworks AI). License includes enterprise/revenue triggers and restrictions on MaaS wrappers.
- **Architecture:** 816B total parameters, 42B active per token. Sparse MoE with 256 total experts, 8 active per token, 62 layers. BF16 and NVFP4 formats. Requires ~700GB VRAM (NVFP4) to ~2TB (BF16). Open-weight under Muse Model License.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **89.2** (datanorth.ai, youtube.com — leading open-weight model for multi-step tool-use)
- Terminal-Bench 2.1: **76.4%** (youtube.com — strong CLI execution capability)
- Terminal-Bench 4.0: **~82.9%** (fireworks.ai — with xhigh reasoning effort)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.0–89.7%** (Artificial Analysis / Fireworks AI — xhigh reasoning effort; near top-tier proprietary competitors)
- HLE (Humanity's Last Exam): **~43.9%** (openrouter.ai — open reasoning variant)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: top-tier among open-weight models; specific rank not disclosed

Coding:

- SWE-bench Verified: **84.3%** (fireworks.ai — independent production validation)
- SWE-bench Pro: **61.5%** (morphllm.com — Muse Spark 1.1/Pro variants)
- LiveCodeBench Pro: **~80.0%** (eigent.ai — competitive programming, contamination-free)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M-token context window. Designed for repository-scale ingestion and long-horizon agentic workflows. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 87/100.** MCP-Atlas 89.2 is elite for open-weight models; Terminal-Bench 76.4–82.9% across evaluation harnesses shows strong autonomous terminal capabilities. Capped by limited general tool-use benchmark coverage outside MCP-Atlas and Terminal-Bench.
- **Reasoning: 82/100.** GPQA Diamond at 89.0–89.7% is strong but below top proprietary models (94%+). HLE at 43.9% is competitive for open-weight. Capped by trailing proprietary frontier models on graduate-level reasoning.
- **Context window: 95/100.** 1M tokens — among the largest in production. Designed for repository-scale prompts. Tier-mapped to 95 for 1M window.
- **Multimodal: 85/100.** Natively multimodal with text + image + video + audio input (1.8B Perception Encoder). Broader input coverage than many proprietary models (includes video + audio). Text-only output caps it below models with multi-modal generation.
- **Coding: 85/100.** SWE-bench Verified at 84.3% and LiveCodeBench Pro at ~80% place it among the best open-weight coding models. SWE-bench Pro 61.5% competitive with proprietary peers. Capped by trailing top proprietary models (GPT-6 Astra, Claude Fable 5) on cutting-edge coding benchmarks.
- **Cost efficiency: 90/100.** Open-weight and free to download. Hosted API pricing varies but generally affordable through providers. Muse Model License allows commercial use with some restrictions. Exceptional value for capability level.
- **Overall Score: 87/100.** Mean of (87 + 82 + 95 + 85 + 85) / 5 = 86.8, rounded half-up to 87. The most capable Western open-weight model at launch, with frontier-class tool use and broad multimodal input coverage, held back primarily by the reasoning gap vs. top proprietary models.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-06
- Method: Public internet research across official model cards, independent benchmarks, and aggregator leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Spark Open Model Card](https://meta.com)
  - [Hugging Face — Muse Spark Open 816B](https://huggingface.co)
  - [Fireworks AI — Muse Spark Open Benchmarks](https://fireworks.ai)
  - [OpenRouter — Muse Spark Open](https://openrouter.ai)
  - [DataNorth — Muse Spark Open Analysis](https://datanorth.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
