# Claude Sonnet 4 — findings by Kimi K3

- Source: Anthropic (`claude-sonnet-4-20250514`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced Claude 4 model (launched alongside Opus 4), matching Opus on SWE-bench Verified at launch at a fraction of the price; first Claude generation with extended thinking + tool use and parallel tool calls. **RETIRED 2026-06-15** — API requests now fail; historical entry only.
- **Provider / access:** ~~Anthropic Claude API (Messages API), Amazon Bedrock, Google Cloud Vertex AI~~ — **no longer served on Anthropic-operated platforms** (Claude API, Claude Platform on AWS, Microsoft Foundry) as of the June 15, 2026 retirement; Bedrock/Google Cloud set their own schedules and have likewise moved on. Recommended replacement per Anthropic: Claude Sonnet 4.6 (today: Sonnet 5.5).
- **Release / knowledge:** Released 2025-05-22 (Anthropic "Introducing Claude 4"). Knowledge cutoff Mar 2025 (per Anthropic model docs). Deprecated 2026-04-14; retired 2026-06-15 (platform.claude.com model deprecations).
- **IDs:** `anthropic/claude-sonnet-4` (API snapshot `claude-sonnet-4-20250514`) — defunct. Was listed as deprecated on OpenCode Zen's June 15, 2026 deprecation list; current Zen availability unverified (requests to retired Claude 4 snapshots fail on first-party platforms regardless).
- **Context window:** 200K tokens input / 64K max output (BenchLM + Anthropic platform docs).
- **Modalities:** Text + image in; text out. Extended thinking (reasoning) yes; tool calls yes (parallel execution); JSON/structured output via tool use.
- **Pricing (last served, 2026-06-15):** $3.00 / $15.00 per 1M tokens in/out (unchanged from announcement).
- **Architecture:** Proprietary; params undisclosed. Anthropic has committed to long-term weight preservation for retired models (deprecation commitments).

### Raw benchmarks found

Agent / tool use:

- Tau-bench (original, extended thinking + tool use): reported at launch with prompt addendum + 100-step cap (Anthropic launch appendix); Tau2-Bench: **52.3%** (BenchLM, AA harness)
- Terminal-Bench 2.1: no verified public score found (Opus 4's 43.2% launch number is a different model)
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found
- Launch note: 65% less shortcut/loophole behavior than Sonnet 3.7 on susceptible agentic tasks (Anthropic)

Reasoning / knowledge:

- GPQA Diamond: **70.0%** without extended thinking (Anthropic launch appendix); AA-GPQA Diamond 68.3% (BenchLM)
- MMMU: **72.6%**, MMMLU: **85.4%**, AIME: **33.1%** — all without extended thinking (Anthropic launch appendix)
- HLE: AA-HLE **4.3%** (BenchLM)
- LCR / AA-LCR: **44.0%** (BenchLM)
- CritPt: **1.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **16.6**; BenchLM overall: **36.08 / #129 of 508** (15 of 486 benchmarks covered)
- Omniscience Accuracy / Hallucination Rate: **22.7% / 41.0%** (AA via BenchLM)

Coding:

- SWE-bench Verified: **72.7%** (Anthropic launch, simple scaffold; high-compute variant 80.2%)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR 44.0% at 200K class; no MRCR/RULER reported

### Normalized scores (1–100)

- **Tool use: 65/100.** Tau2 52.3% with first-gen extended-thinking+tool-use and parallel calls is mid-band; capped by missing TB/Tau3/GDPval evidence for this exact model.
- **Reasoning: 70/100.** GPQA 70% no-thinking and MMMU 72.6% sit at the strong end of the 60–80% mid band; capped by AIME 33.1% and AA-HLE 4.3% (weak hard-reasoning showings).
- **Context window: 70/100.** 200K band base (=70); AA-LCR 44.0% is middling for its window.
- **Multimodal: 65/100.** Image in + text out (60–75 band); MMMU 72.6% / AA-MMMU-Pro 62.4% solid but no audio/video-native or non-text output.
- **Coding: 85/100.** SWE-bench Verified 72.7% (SOTA at launch; high-compute 80.2%) lands at the low end of the 70–80% → 85–93 band; capped there by missing LiveCodeBench/SciCode rows and later models at 79–89%.
- **Cost efficiency: 60/100.** $3/$15 matched the methodology's ~60 anchor while it was served; irrelevant post-retirement.
- **Overall Score: 71/100.** (65+70+70+65+85)/5 = 71.0. Historical record only — the model cannot be used; equivalent workloads belong on Sonnet 4.6 or Sonnet 5.5.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (Anthropic "Introducing Claude 4" launch post + benchmark appendix, platform.claude.com model deprecations, BenchLM model page); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: status drift — deprecated 2026-04-14, **retired 2026-06-15** (first-party requests fail; recommended replacement claude-sonnet-4-6); benchmarks unchanged (no new runs possible); band-rule fixes: Coding 80→85, Cost 58→60, Overall 70→71.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
