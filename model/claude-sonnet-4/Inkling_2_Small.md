# Claude Sonnet 4 — findings by Fledge Alpha

- Source: Anthropic (`claude-sonnet-4`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 22, 2025 mid-tier flagship; matched Opus 4's 72.5% SWE-bench at 1/5 the price and became GitHub Copilot's coding-agent backbone.
- **Provider / access:** Claude API (`claude-sonnet-4-20250514`), Bedrock, Vertex AI, Foundry.
- **Release / knowledge:** 2025-05-22; knowledge cutoff Mar 2025.
- **IDs:** `anthropic/claude-sonnet-4`
- **Context window:** 200,000 tokens (1M tiered on Google platforms post-launch).
- **Modalities:** Text + image in; text out; hybrid reasoning with up-to-64K thinking budget.
- **Pricing (as of 2026-10-02):** $3/M in, $15/M out; cached read $0.30; >200K tier $6/$22.50.
- **Architecture:** Proprietary, hybrid reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **35.5%**; OSWorld: not published separately
- TAU/MCP-class agent rows not separately published for this ID; successor metrics flow through Sonnet 4.5/4.6.

Reasoning / knowledge:

- GPQA Diamond: **75.4–76.0%** (w/ extended thinking)
- HLE: not published; IFBench/MMMLU rows live on aggregator scorecards

Coding:

- SWE-bench Verified: **72.7%** (Anthropic, standard two-tool scaffold; 80.2% with parallel test-time compute)
- GitHub Copilot selection as the coding agent backbone is the launch-era signal

Long context: 200K standard; GP/APEX rows absent.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 35.5% caps the row despite strong coding press coverage.
- **Reasoning: 70/100.** GPQA 76% with extended thinking; AIME ~80 class.
- **Context window: 60/100.** 200K window now; Google accidentally turned the Vertex row into 1M for a price band on its sheet.
- **Multimodal: 62/100.** Text + image in, no audio/video.
- **Coding: 76/100.** SWE-bench Verified 72.7% matched Opus 4 at launch — the headline Sonnet-row number that epoch.
- **Cost efficiency: 76/100.** $3/$15 is mid-tier, but later Sonnet rows undercut it.
- **Overall Score: 66/100.** Half-up mean of the five non-cost dims: (62+70+60+62+76)/5 = 66.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic Claude 4 launch post, Benchgen, AI Release Tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
