# Claude Sonnet 5.5 — findings by GPT 6 Sol

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet 5 successor for coding, document work and fast tool-using agents. Distinct from Opus 5.5; effort levels tune this same model rather than selecting another SKU ([Anthropic launch](https://www.anthropic.com/claude-sonnet-5-5)).
- **Provider / access:** Claude API `claude-sonnet-5-5` on Anthropic Messages (`https://api.anthropic.com`); [OpenCode Zen `opencode/claude-sonnet-5-5`](https://pi.dev/models/opencode/claude-sonnet-5-5) on Anthropic Messages at `https://opencode.ai/zen`, not a verified Chat Completions endpoint.
- **Release / knowledge:** September 28, 2026; reliable/training cutoff June 2026 ([official model reference](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)).
- **IDs:** `claude-sonnet-5-5` first-party and `opencode/claude-sonnet-5-5` Zen; no current separate Free ID evidenced by Zen's priced listing.
- **Context window:** 1,000,000 total, 128,000 synchronous output; Anthropic supports 300K *batch-only beta* output with its beta header ([Anthropic reference](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)).
- **Modalities:** Text/image input, text output; PDF attachment workflows are available through the API but not evidence of native video/audio I/O. Adaptive thinking and tools supported; forced-tool mode and some older computer-tool versions are not accepted ([Anthropic reference](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)).
- **Pricing (as of 2026-10-12):** $2 input / $10 output / $2.50 five-minute cache write per 1M. **Cache-read discrepancy:** Anthropic's [September launch](https://www.anthropic.com/claude-sonnet-5-5) and [Zen provider listing](https://pi.dev/models/opencode/claude-sonnet-5-5) quote **$0.20**, while the current [Anthropic model reference](https://platform.claude.com/docs/en/models/sonnet-5-5/overview) quotes **$0.10**; confirm billed provider/date, don't combine the two as if identical. Batch input/output half-price.
- **Architecture:** Proprietary, parameter count undisclosed ([Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-5-5)).

### Raw benchmarks found

Cross-checked [Anthropic's release and system-card-linked figures](https://www.anthropic.com/claude-sonnet-5-5) with independent [Vals](https://www.vals.ai/models/anthropic_claude-sonnet-5-5), [Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-5-5), [Cursor](https://cursor.com/cursorbench) and [Proximal](https://www.frontierswe.com/). [BenchLM's evidence index](https://benchlm.ai/models/claude-sonnet-5-5) is used to trace individual system-card and AA rows, not treated as another measurement. Vals/AA may include server-side Sonnet 5 fallback on safety refusals.

Agent / tool use:

- [Anthropic Terminal-Bench 4.0 **70.6%**](https://www.anthropic.com/claude-sonnet-5-5) (best effort); independent [Vals current run **64.14% ±1.01**](https://www.vals.ai/models/anthropic_claude-sonnet-5-5), [AA **63.6%**](https://benchlm.ai/models/claude-sonnet-5-5) in other harnesses. Vals dated initial run **53.03%** drops to **50.51%** when fallback-assisted cases count as failures, highlighting evaluation revision and model-identity sensitivity.
- [Vals Terminal-Bench 2.1 **83.15% with Sonnet 5 fallback** versus **80.52%** excluding fallback-assisted successes](https://www.vals.ai/models/anthropic_claude-sonnet-5-5); [Anthropic GDPval-AA v2.1 **1844 Elo**, AA-Briefcase **1811 Elo**, OSWorld 2.1 **80.1% partial**](https://www.anthropic.com/claude-sonnet-5-5). OSWorld partial is not a strict pass rate.
- [Vals Index **67.04% ±0.92**](https://www.vals.ai/models/anthropic_claude-sonnet-5-5) (#2/47 displayed), SRE Bench **30.15%** with fallback / **19.08%** without, CyberBench **59.58%** with fallback / **41.97%** without, Harvey LAB **2.92%**. [AA AutomationBench-AA **71.8%**](https://benchlm.ai/models/claude-sonnet-5-5) vs Anthropic's Zapier version **44.70%** (different tasks/harness). Claw-Eval/Tau3: no verified public exact-model score found.

Reasoning / knowledge:

- [Anthropic HLE **64.5% with tools**](https://www.anthropic.com/claude-sonnet-5-5); [system-card-linked HLE **56.9% without tools**](https://benchlm.ai/models/claude-sonnet-5-5); [AA independently HLE **55.0%**, CritPt **31.4%**, Index v4.3.2 **56**](https://benchlm.ai/models/claude-sonnet-5-5).
- [Vals ProofBench v1.1 **100.00%**](https://www.vals.ai/models/anthropic_claude-sonnet-5-5) (#1/50 displayed), MysteryMechanism **49.10%**, BioMysteryBench **81.11%**. GPQA Diamond for this exact model: no verified independent score found in the consulted direct results; do not reuse Sonnet 5 data.

Coding:

- [Anthropic system-card-linked SWE-bench Pro **81.3%**, DeepSWE **71.0%**, FrontierCode 1.1 Main **46.2% max / 52.1% xhigh**](https://benchlm.ai/models/claude-sonnet-5-5); [Anthropic's footnote](https://www.anthropic.com/claude-sonnet-5-5) says max effort over-edited or timed out on some FrontierCode tasks, so more effort was not strictly better.
- [CursorBench 4.0 **55.5% at max** ($7.05/task), **53.1% xhigh**](https://cursor.com/cursorbench); [Vals Code Migration **69.83%**, Vibe Code Bench **92.39%**, TB4 **64.14%**](https://www.vals.ai/models/anthropic_claude-sonnet-5-5).
- [Proximal FrontierSWE v2 **61.89% mean@5**](https://www.frontierswe.com/) across 34 long-running coding/research tasks, five trials each; [AA SciCode **61.0%**](https://benchlm.ai/models/claude-sonnet-5-5). Exact-version SWE-bench Verified and LiveCodeBench: no verified public score found in the consulted primary results.

Long context / multimodal:

- [AA-LCR **82.7%**](https://benchlm.ai/models/claude-sonnet-5-5) long-context reasoning; no verified MRCR/RULER near-1M retrieval percentage found, so context capacity alone does not establish flawless recall.
- [Anthropic Chartography **61.6% without tools**](https://www.anthropic.com/claude-sonnet-5-5) versus [**90.2% with tools**, BenchCAD vision-to-code **0.747 without / 0.963 with tools**](https://benchlm.ai/models/claude-sonnet-5-5): vision strong in a tool-enabled workflow, not standalone audio/video processing.

### Normalized scores (1–100)

- **Tool use: 94/100.** TB4 63.6–70.6%, GDPval 1844 and AA AutomationBench 71.8% show strong agency; fallback-dependent security/SRE results and Harvey LAB 2.92% cap consistency.
- **Reasoning: 93/100.** HLE 56.9% unassisted and AA Index 56 support frontier work; CritPt 31.4% and missing independently verified GPQA limit confidence at the ceiling.
- **Context window: 95/100.** 1M native context and 128K synchronous output are excellent; without ≥98% retrieval at 512K+ the top mark is unjustified.
- **Multimodal: 68/100.** Excellent image/chart and PDF-enabled workflows, but native API accepts only text/images and returns text; no audio/video I/O.
- **Coding: 97/100.** FrontierSWE 61.89%, Vibe Code 92.39%, SWE-Pro 81.3% and strong TB4 support elite agentic engineering; xhigh/max variability and missing SWE Verified constrain 100.
- **Cost efficiency: 75/100.** $2/$10 is competitive per token for this capability, but heavy max-effort sessions are costly; cache-read price differs between latest Anthropic docs and launch/Zen listing.
- **Overall Score: 89/100.** (94 + 93 + 95 + 68 + 97) / 5 = 89.4, half-up 89; excellent tool-driven coding and documents at a lower base rate than premium Opus/Fable.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Anthropic launch/docs, Vals and AA independent measurements, Cursor and Proximal coding leaderboards, plus sourced benchmark index; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
