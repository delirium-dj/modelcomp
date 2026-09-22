# GPT-5.6 Sol — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship model in the GPT-5.6 family (released July 9, 2026), optimized for complex reasoning, professional coding, cybersecurity, and long-horizon tasks; terminal-bench tied with Muse Spark 1.3 at launch.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-sol`); available via ChatGPT and OpenAI API. Chat Completions API; Responses API; max reasoning effort mode.
- **Release / knowledge:** 2026-06-26 (limited preview), 2026-07-09 (stable public); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.6-sol` (no Zen Free ID found; paid pricing)
- **Context window:** 1,050,000 tokens (~1.05M) with max output 128,000 tokens; verified via OpenAI API documentation.
- **Modalities:** Text + image input; text output; reasoning yes (max reasoning effort mode); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-07-09):** ~$4.00–$5.00 / ~$20.00–$30.00 per 1M input/output tokens (promotional $4/$20 per some providers; standard ~$5/$30). Paid — no free tier.
- **Architecture:** Proprietary (OpenAI); exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Sol max): **88.8%** (OpenAI official, July 2026 — tied with Muse Spark 1.3)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (published benchmark data, July 2026)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Coding Agent Index: **80.0** (led at launch per Artificial Analysis, July 2026)

Coding:

- SWE-bench Verified: high performance cited; SWE-bench Verified largely saturated at ~96%+ for top models by September 2026 (context: published benchmark landscape, September 2026)
- SWE-bench Pro: no verified specific Sol score found; top-performing tier among GPT-5.6 family
- Terminal-Bench 2.1: **88.8%** (OpenAI official, July 2026)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1.05M context confirmed.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 88.8% is at the frontier threshold (ref ~88%+ = 90–100); Coding Agent Index 80 led at launch. No Tau3/GDPval/Claw-Eval. Scored 90.
- **Reasoning: 93/100.** GPQA 94.6% is frontier-class (ref ≥90% → 90–100; 94.6 is among the highest reported). Scored 93.
- **Context window: 100/100.** 1,050,000 tokens (≥1M) → 100 per tier mapping.
- **Multimodal: 65/100.** Text + image input confirmed. No audio/video/PDF. Per methodology: image in = 60–70; scored 65.
- **Coding: 90/100.** TB2.1 88.8% is frontier-class; SOTA Coding Agent Index at launch; SWE Verified cited as near-saturation territory (96%+). No separate SWE-Pro/DeepSWE numbers. Scored 90.
- **Cost efficiency: 50/100.** ~$4–5/$20–30 per 1M tokens. Between $3/$15 (~60) and $10/$50 (~30); scored 50 for the $5/$30 end.
- **Overall Score: 88/100.** Mean of (Tool 90 + Reasoning 93 + Context 100 + Multimodal 65 + Coding 90) / 5 = 438 / 5 = 87.6 → 88. Best-fit: demanding professional coding and reasoning tasks within the GPT-5.6 family; prior flagship before GPT-6 Astra's September 2026 release.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (OpenAI official benchmarks, Artificial Analysis, qcode.cc, datalearner.com, Wikipedia); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
