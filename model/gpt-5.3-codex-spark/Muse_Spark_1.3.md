# GPT-5.3 Codex Spark — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.3-Codex-Spark (`gpt-5.3-codex-spark`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's ultra-fast small sibling of GPT-5.3-Codex (Feb 2026 research preview): first model on Cerebras WSE-3 at 1000+ tok/s, built for real-time interactive coding (targeted edits, rapid iteration) rather than long autonomous runs.
- **Provider / access:** Codex app, CLI, and VS Code extension for ChatGPT Pro users (research preview, separate rate limits, usage excluded from standard limits); API for a small set of design partners only. OpenCode Zen `opencode/gpt-5.3-codex-spark` (catalogue entry; metered pricing unannounced).
- **Release / knowledge:** Released 2026-02-12 (OpenAI launch post; 7 days after full Codex). Knowledge cutoff not officially published for the Spark variant (ai-tldr) — no verified cutoff found.
- **IDs:** `gpt-5.3-codex-spark` (OpenAI / Codex selector); `opencode/gpt-5.3-codex-spark` (Zen catalogue / meta.json)
- **Context window:** 128,000 tokens total, text-only at launch — verified via OpenAI launch post and aireleasetracker spec row (max output undisclosed)
- **Modalities:** Text in/out only (explicitly text-only; multimodal input planned for later family members, not this variant); minimal-targeted-change operating style, no auto-tests unless asked
- **Pricing (as of 2026-10-01):** No per-token API price published (design-partner API only; ai-tldr); research preview for ChatGPT Pro with separate preview rate limits and queuing under load. Full-Codex $1.75/$14.00 explicitly does NOT transfer — scored on gated preview access, provisional.
- **Architecture:** Proprietary smaller speed-optimized Codex variant on Cerebras Wafer-Scale Engine 3 (first OpenAI production deployment off Nvidia); undisclosed parameters; per-roundtrip overhead -80%, per-token overhead -30%, time-to-first-token halved (OpenAI, via the-decoder)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **58.4%** (the-decoder.com reporting OpenAI figures: Spark 58.4% vs full Codex 77.3% vs GPT-5.1-Codex-mini 46.1%; speed-for-precision trade)
- GDPval-AA: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Vendor reasoning claim: surpasses GPT-5.2-Codex and GPT-5.2 reasoning with 25% faster output and ~half the tokens on some outputs (siliconangle.com reporting OpenAI) — qualitative, no measured benchmark attached
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-Bench Pro: **no verified public absolute score found** (OpenAI: strong performance in a fraction of the time — similar accuracy in ~2-3 min vs 15-17 min for full Codex per the-decoder — but no absolute percentage published for the Spark variant per ai-tldr; full-Codex 56.8% does NOT transfer)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 128K text-only ceiling only (larger/longer-context family members planned, not this variant)

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 58.4% sits upper-mid with mid-task steering and status updates; capped by missing GDPval/Tau/Claw/MCP and the deliberate minimal-change operating style.
- **Reasoning: 60/100.** Vendor "surpasses GPT-5.2" claim with half-token efficiency is qualitative only; zero measured GPQA/HLE/LCR/CritPt/Index caps at the mid-band floor.
- **Context window: 58/100.** 128K total in the 100K-200K 50-64 tier lower-middle; text-only with undisclosed max output and no measured retention.
- **Multimodal: 15/100.** Explicitly text-only at launch per OpenAI (multimodal planned for later family members) — text-only floor.
- **Coding: 74/100.** Terminal-Bench 2.0 58.4% plus SWE-Pro similar-accuracy-at-fraction-of-time (qualitative, unscored) show strong small-fast coding above the mini line; capped hard by no absolute SWE number and no LiveCode/SciCode/Vibe/DeepSWE.
- **Cost efficiency: 60/100.** No metered price (Pro-gated preview, separate rate limits) — access-scored at the flagship-gated tier, provisional; re-score when metered pricing publishes.
- **Overall Score: 55/100.** Mean of the five quality dims (68+60+58+15+74)/5 = 55.0; best fit as real-time interactive edit/iterate companion to full Codex, never as the deep-reasoning runner.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.3-Codex-Spark" post 2026-02-12, the-decoder.com 2026-02-12 with TB2.0 58.4% figures, siliconangle.com launch analysis, ai-tldr.dev variant page with deprecation exemption, aireleasetracker.com spec row); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
