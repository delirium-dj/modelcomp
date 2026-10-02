# Muse Spark 1.2 Contributor Free — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Contributor Free (`opencode/muse-spark-1.2-contributor-free`)
- **Short description:** Meta's second-generation frontier agentic model released August 2026, predecessor to Muse Spark 1.3; strong performer on coding and long-horizon agentic workflows with 1M context and full multimodal (text/image/speech/video in).
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`); also available as standard paid tier. Chat Completions API.
- **Release / knowledge:** ~2026-08 release; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free ID exists on Zen)
- **Context window:** 1,000,000 tokens (1M); verified via BenchLM and Artificial Analysis.
- **Modalities:** Text + image + speech + video input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-08):** Free (Contributor tier — $0 on Zen); Standard tier $1.25/$4.25 per 1M tokens. Note: free tier carries Contributor-level training-data consent.
- **Architecture:** Proprietary transformer (Meta); successor to 1.2 standard; same weights as 1.2 standard per Vercel changelog; exact params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (BenchLM muse-spark-1-2, 2026)
- GDPval-AA: **1631 Elo** (BenchLM muse-spark-1-2, 2026; vs Muse Spark 1.3 at 1754 — +123 improvement)
- Tau3-Banking / Tau2-Bench: no verified public score found directly for 1.2
- Claw-Eval / ClawProBench: no verified public score found
- MCP Atlas: **90.3%** (Benchgen.com muse-spark-1-2, 2026)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM muse-spark-1-2, 2026)
- HLE: **45.5%** (BenchLM muse-spark-1-2, 2026)
- LCR / MLCR: no verified public LCR score found for 1.2
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **40** (Artificial Analysis model page, 2026)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- DeepSWE: **59.3%** (BenchLM muse-spark-1-2, 2026)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks separately published for 1.2; 1M context confirmed.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 82.9% is strong but below the 88%+ frontier threshold (ref: 90–100); GDPval 1631 is high mid-range; MCP Atlas 90.3% is excellent for tool orchestration. No Tau3/Claw-Eval. Scored 87 reflecting near-frontier agentic performance.
- **Reasoning: 89/100.** GPQA 90.4% is frontier-class (ref ≥90% → 90–100); HLE 45.5% is strong; AA Index 40 places it in high mid-range. Scored 89 — near-frontier reasoning with no LCR/CritPt data.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → tier mapping 95–100; scored 95 as retrieval data at far end not verified for 1.2.
- **Multimodal: 85/100.** Text + image + speech + video input confirmed (Artificial Analysis model page). No audio output or PDF-specific coverage noted. Per methodology: image+video+audio in = 90–100; scored 85 reflecting confirmed speech/video but no PDF note.
- **Coding: 83/100.** DeepSWE 59.3% is mid-tier (frontier ref ≥74%+ = 90–100; mid-range = 55–70); TB2.1 82.9% is strong. No SWE-bench Verified, LiveCodeBench, or SciCode data. Scored 83 reflecting strong agentic but no SWE Verified anchor.
- **Cost efficiency: 100/100.** $0 input/$0 output on Zen Contributor Free tier → 100.
- **Overall Score: 88/100.** Mean of (Tool 87 + Reasoning 89 + Context 95 + Multimodal 85 + Coding 83) / 5 = 439 / 5 = 87.8 → 88. Best-fit: capable free near-frontier fallback when Muse Spark 1.3 Contributor is unavailable; strong multimodal capability included.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (BenchLM muse-spark-1-2, Artificial Analysis, Benchgen.com, Vercel AI Gateway changelog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
