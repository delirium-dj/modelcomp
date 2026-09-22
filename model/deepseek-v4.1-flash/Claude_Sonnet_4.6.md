# DeepSeek V4.1 Flash — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (`deepseek/deepseek-flash`)
- **Short description:** DeepSeek's open-weights multimodal MoE model released September 10, 2026, optimized for high-throughput agentic workflows with frontier-class reasoning and coding; native visual understanding with 1M context and highly competitive pricing.
- **Provider / access:** DeepSeek API (`deepseek-flash` API endpoint); also available on Hugging Face and third-party providers. Legacy V4-Flash traffic routed here. Chat Completions API.
- **Release / knowledge:** 2026-09-10 release; knowledge cutoff not publicly disclosed.
- **IDs:** `deepseek/deepseek-v4-1-flash` (also accepts `deepseek-flash`; no Zen Free ID found; paid)
- **Context window:** 1,000,000 tokens (1M); verified via DeepSeek official documentation.
- **Modalities:** Text + image (vision) input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-10):** $0.30 / $1.20 per 1M input/output tokens (peak); ~$0.15 / $0.60 off-peak. Paid — no free tier. Data: off-peak rates apply during low-demand periods with demand-based balancing.
- **Architecture:** 552B total parameters; Mixture-of-Experts (MoE); 8B active parameters (input), 16B (output); causal encoder-decoder; compressed sparse attention (~890 bytes/token KV cache); open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek official model report, September 2026 — max reasoning_effort=100)
- Terminal-Bench 4.0: **31.2%** (DeepSeek official model report, September 2026)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek official model report, September 2026 — Pass@1)
- HLE (with tools): **63.9%** (DeepSeek official model report, September 2026)
- MathArena Apex: **65.6%** (DeepSeek official model report, September 2026 — Pass@1)
- Codeforces Rating: **3471** (DeepSeek official model report, September 2026)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- DeepSWE v1.1: **74.2%** (DeepSeek official model report, September 2026 — Resolved)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Codeforces: **3471** rating (grandmaster-level competitive programming)
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1M context window confirmed.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 90.6% exceeds the frontier threshold (ref ~88%+ = 90–100); TB4.0 31.2% is mid-tier on the newer benchmark, indicating some harness gap. Scored 92 — top-tier TB2.1 with caveat on TB4.0 gap.
- **Reasoning: 92/100.** GPQA 90.9% is frontier-class (ref ≥90% → 90–100); HLE 63.9% with tools is outstanding; Codeforces 3471 is grandmaster level. Scored 92 reflecting frontier reasoning across multiple domains.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100; scored 95 as retrieval verification not published.
- **Multimodal: 70/100.** Native visual understanding (image input) confirmed; text output. No audio/video/PDF confirmed. Per methodology: image in = 60–70; scored 70 at upper end for confirmed multimodal with open-weights accessibility.
- **Coding: 90/100.** DeepSWE 74.2% meets the frontier threshold (ref ≥74%+ = 90–100); TB2.1 90.6% is frontier-class; Codeforces 3471 is grandmaster. No SWE-bench Verified/LiveCodeBench published. Scored 90.
- **Cost efficiency: 97/100.** Peak pricing $0.30/$1.20 per 1M tokens is extremely competitive. Per methodology: ~$0.10–$0.30/$0.50–$1.20 ≈ 95–99; scored 97 for the $0.30/$1.20 peak rate (off-peak would score 100).
- **Overall Score: 88/100.** Mean of (Tool 92 + Reasoning 92 + Context 95 + Multimodal 70 + Coding 90) / 5 = 439 / 5 = 87.8 → 88. Best-fit: excellent cost-efficient frontier model for high-throughput agentic workflows with strong reasoning and coding; open-weights allow on-premise deployment.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (DeepSeek official model report, Hugging Face model card, deepseek.com API docs, mindstudio.ai pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
