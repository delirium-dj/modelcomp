# GPT-5.1 — findings by Kimi K3

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's efficient-reasoning refresh of the GPT-5 series — adaptive thinking time, a new `reasoning_effort='none'` mode, apply_patch and shell tools, and 24h extended prompt caching; balanced for agentic and coding workloads.
- **Provider / access:** OpenAI API (Responses + Chat Completions), all paid tiers; `gpt-5.1-chat-latest` for ChatGPT-parity; alongside `gpt-5.1-codex` / `gpt-5.1-codex-mini` variants optimized for long-running agentic coding in Codex-like harnesses. Also on Azure AI Foundry.
- **Release / knowledge:** Released 2025-11-13 (official developer announcement).
- **IDs:** `openai/gpt-5.1` (Responses API and Chat Completions). No Free ID exists on OpenCode Zen.
- **Context window:** GPT-5 series window: 272K input tokens, up to 128K reasoning+output tokens, 400K total (per the GPT-5 developer post; GPT-5.1 announcement keeps the series platform spec).
- **Modalities:** Text + image in; text out. Adaptive reasoning with `reasoning_effort` none/low/medium/high (default `none`); `verbosity`; custom plaintext tools (CFG-constrained); new `apply_patch` and `shell` tool types; parallel tool calling; Structured Outputs; web search in no-reasoning mode.
- **Pricing (as of 2026-10-01):** Same as GPT-5: $1.25 / $10 per MTok (input/output); cached input tokens 90% cheaper with up to 24h retention (`prompt_cache_retention='24h'`); Batch API supported. Paid only.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

All numbers from OpenAI's official "Introducing GPT-5.1 for developers" (2025-11-13), GPT-5.1 (high) column unless noted.

Agent / tool use:

- Tau2-bench: airline **67.0%**, telecom **95.6%** (with a short generic prompt, per OpenAI footnote), retail **77.9%**
- New tools shipped: `apply_patch` (freeform structured diffs), `shell` (propose-execute loop)
- Sierra real-world eval: "20% improvement on low-latency tool calling" vs GPT-5 minimal reasoning in no-reasoning mode
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (no tools, high effort)
- AIME 2025: **94.0%** (no tools); FrontierMath (python tool): **26.7%**
- HLE / LCR / MLCR / CritPt: **no verified public score found** for this version
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (independent)

Coding:

- SWE-bench Verified: **76.3%** (all 500 problems, JSON-based apply_patch harness, averaged across problems)
- Cline diff-editing benchmark: SOTA with +7% on their evals (vendor-partner claim)
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- BrowseComp Long Context @128K: **90.0%**
- OpenAI-MRCR / Graphwalks for GPT-5.1 specifically: **no verified public score found** (GPT-5 series numbers exist in the GPT-5 post; not re-published for 5.1)

Multimodal (raw): MMMU **85.4%**.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2 telecom 95.6%/airline 67%/retail 77.9% plus first-class shell and apply_patch tooling put it clearly above the mid band; capped below the 90+ frontier refs by the airline/retail numbers and no independent tool benchmarks.
- **Reasoning: 85/100.** GPQA 88.1% and AIME 94.0% sit just under the 90+ frontier reference line; no HLE number published for this version caps it from the top band.
- **Context window: 78/100.** 272K-in/400K-total lands mid 200K–500K tier (65–84), supported by a strong 90% BrowseComp Long Context @128K; no MRCR/retrieval number above 128K published for this version.
- **Multimodal: 78/100.** Image input with MMMU 85.4% (best of the GPT-5 series family measured) in the image+video-understanding band; no audio input, no non-text output.
- **Coding: 87/100.** SWE-bench Verified 76.3% on all 500 problems plus apply_patch/shell tooling and partner SOTA claims (Cline diff editing) place it near-frontier; no independent LiveCodeBench/SciCode numbers keep it out of the 90s.
- **Cost efficiency: 80/100.** $1.25/$10 per MTok sits between the $1.25/$4.25 → ~88 and $3/$15 → ~60 reference points, weighted down by the $10 output price; 90%-off 24h caching materially cuts effective cost on repeated-context workloads.
- **Overall Score: 82/100.** Half-up mean of the five quality dims: (80 + 85 + 78 + 78 + 87) / 5 = 81.6 → 82. Best fit: default OpenAI tier for agentic coding and tool-using apps needing near-frontier quality without Codex-tier cost; escalate frontier research questions to GPT-5.5+ class models.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.1 for developers", 2025-11-13; OpenAI GPT-5 developer post for series window/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
