# Fledge Alpha — findings by GLM 5.3 Flash

- Source: Publisher unknown — stealth model on OpenCode Zen (`fledge-alpha`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** A stealth/anonymous model that appeared on OpenCode Zen on 2026-10-01 with no named developer — a router-fronted, very fast general model with high reasoning quality that the community has (unconfirmed) guessed to be DeepSeek V4.x or Thinking Machines' Inkling behind a router. Top use cases: free high-quality chat and reasoning through OpenCode.
- **Provider / access:** OpenCode Zen (`opencode/fledge-alpha`; free variant `fledge-alpha-free`); tracked in the models.dev catalog (`fledge-alpha-free.toml`); community coverage on stealthmodels.com and promptblueprints.tech. Chat Completions-style via OpenCode.
- **Release / knowledge:** First usage 2026-09-30, listed on OpenCode Zen 2026-10-01, catalog entry 2026-10-02; knowledge cutoff unknown (identity unconfirmed).
- **IDs:** `fledge-alpha` / `fledge-alpha-free` on OpenCode Zen. No other verified API ID; availability confirmed only from US regions (blocked outside the US per community tracking).
- **Context window:** 1,048,576 tokens listed, max output 131,072 (models.dev / OpenCode catalog, 2026-10-02). Verified how: catalog specs only — no retrieval benchmark and router behavior makes single-model attribution shaky.
- **Modalities:** text + image input, text output (catalog); reasoning effort selector (low/high/max); tool calls supported. JSON mode not documented.
- **Pricing (as of 2026-10-05):** Free — $0 input and $0 output token rates for `fledge-alpha-free` on OpenCode Zen (recorded spend $0 across 12,504 sessions). Privacy/data-usage caveats of a free stealth model of unknown provenance apply and are significant here.
- **Architecture:** unknown — "not listed as open" weights; tokenization inconsistencies across runs (7,536 vs 6,499 input tokens for the same prompts) are evidence for a router backed by more than one fast model rather than a single stable model.

### Raw benchmarks found

Third-party measurements from Stealth Models research (2026-10-03, small-sample but methodology-documented: 206 questions total, max reasoning effort, no tools, 95% Wilson CIs). No vendor numbers exist — the developer is unknown.

Agent / tool use:

- Tool calls: supported per catalog; no measured tool benchmark
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (36/39, 95% CI 79.7–97.3%; vs Space Bunny 82.1% in the same harness — Stealth Models, 2026-10-03)
- MMLU-Pro: **92.0%** (92/100, 95% CI 85.0–95.9%; vs Space Bunny 77.0%)
- HLE (text-only): **25.4%** (17/67, 95% CI 16.5–36.9%; trails Space Bunny's 30.3% on the shared-question subset)
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis / BenchLM: not indexed as of writing

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode / Vibe Code Bench: no verified public score found

Speed / throughput:

- ~**61 output tokens/s** including reasoning tokens (six 2,048-token generation runs, low reasoning effort — Stealth Models)

Long context:

- no long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported

### Normalized scores (1–100)

- **Tool use: 60/100.** Tool-call support is confirmed in the catalog and community sessions report working agent use, but no measured tool benchmark exists (no Terminal-Bench/Tau2/Toolathon) and router routing makes capability consistency uncertain.
- **Reasoning: 84/100.** GPQA Diamond 92.3% and MMLU-Pro 92.0% are frontier-tier measured results beating Space Bunny soundly; capped from the top tier by small samples with wide confidence intervals, an HLE dip (25.4%), and unidentifiable provenance.
- **Context window: 80/100.** 1,048,576-token window with 131K output per the official catalog; capped by zero retrieval verification and router-behind-the-alias uncertainty.
- **Multimodal: 55/100.** Image input is listed in the catalog, but no measured vision benchmark exists anywhere for this model.
- **Coding: 55/100.** No coding benchmark of any kind was found (no SWE-bench, no LiveCodeBench); only anecdotal OpenCode session usage supports coding competence.
- **Cost efficiency: 100/100.** $0 in / $0 out on OpenCode Zen's free tier with 12,504 completed sessions at $0 recorded spend; only the unknown-provenance data-usage trade-off qualifies the deal, which does not change the price.
- **Overall Score: 66.8/100.** Mean of the five quality dims (60 + 84 + 80 + 55 + 55) / 5. Best fit: free, fast, strong general reasoning and chat; not yet trustworthy for agentic/coding pipelines until identity and coding benchmarks firm up.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (Stealth Models measured eval of 2026-10-03, models.dev catalog, OpenCode Zen docs, promptblueprints.tech); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
