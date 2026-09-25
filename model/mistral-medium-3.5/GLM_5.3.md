# Mistral Medium 3.5 — findings by GLM 5.3

- Source: Mistral AI (`mistral-medium-3.5-128b` / `mistral-medium-3-5-26-04`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's first flagship merged model (released 2026-04-29): a dense 128B open-weights model combining instruction-following, reasoning, and coding, optimized for long-horizon agentic work — the engine behind Vibe remote coding agents and Le Chat Work mode. Top use case: long-horizon coding/productivity agents, self-hostable on as few as four GPUs.
- **Provider / access:** Mistral API `mistral-medium-3-5-26-04` (Chat Completions, Agents & Conversations API); open weights `mistralai/Mistral-Medium-3.5-128B` (Modified MIT); also on NVIDIA build.nvidia.com and NIM.
- **Release / knowledge:** 2026-04-29 (AA; Mistral blog 2026-05-22 announced public preview + remote agents); knowledge cutoff not stated publicly.
- **IDs:** `mistral-medium-3-5-26-04` (no OpenCode Zen listing — Mistral is absent from the current Zen catalog; curated stub ID `opencode/mistral-medium-3.5` unverified on Zen).
- **Context window:** 256K (Mistral docs; AA lists 260K).
- **Modalities:** text and image in / text out (vision encoder trained from scratch for variable image sizes/aspect ratios); reasoning yes (configurable per request); tool calls yes (function calling, built-in tools, Agents API); structured outputs, predicted outputs, document QnA, batching all verified on the docs page.
- **Pricing (as of 2026-09-25):** $1.50 in / $7.50 out per 1M (Mistral API; AA blended $1.16/1M at 7:2:1, cache discount 90%). Open weights give a $0-license self-host path (4+ GPUs).
- **Architecture:** dense 128B; merged flagship (single set of weights for instruct/reasoning/coding); Modified MIT license.

### Raw benchmarks found

Agent / tool use:

- τ³-Telecom: **91.4** (Mistral blog — vendor-reported)
- Terminal-Bench 4.0 / 2.1: **no verified public score found**
- GDPval-AA / Tau3-Banking: **no verified public score found**
- Claw-Eval / Toolathlon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **14, #6/65 among open-weights medium-size reasoning models** (AA model page; median for class: 8)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: **no verified public score found**

Coding:

- SWE-bench Verified: **77.6%** (Mistral blog — vendor-reported, ahead of Devstral 2 and Qwen3.5 397B A17B per the vendor)
- SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- 256K window verified (docs); no MRCR/RULER/GraphWalks value — no long-context retrieval score found.

Speed / efficiency (AA):

- Output speed **144.1 tok/s** (above class median 129.9), TTFT 2.36s, concise generation (100M tokens on the Intelligence Index, better than average).

### Normalized scores (1–100)

- **Tool use: 74/100.** τ³-Telecom 91.4 (vendor) is exceptional and the full agent stack is production-verified (Vibe remote agents, parallel tool calls, structured output for downstream code), but no independent TB/GDPval/Toolathlon numbers exist — provisional score resting mostly on one vendor-reported domain result.
- **Reasoning: 62/100.** AA Intelligence Index 14 is well above its open-weights size-class median (8) but low in absolute terms; no GPQA/HLE/LCR rows found — provisional.
- **Context window: 73/100.** 256K verified sits in the 200K–500K tier; no retrieval-at-length data.
- **Multimodal: 68/100.** Text+image in, text out (image tier 60–70) with a from-scratch variable-size vision encoder and document-QnA support; no video/audio input or non-text output.
- **Coding: 72/100.** SWE-bench Verified 77.6% (vendor) is competitive for a dense 128B and it replaces Devstral 2 as Mistral's coding-agent default; zero independent coding rows cap it.
- **Cost efficiency: 84/100.** $1.50/$7.50 per 1M is pricier than the ~$1.25/$4.25 (~88) anchor on output, offset by 90% cache discounts, 144 tok/s throughput, and a 4-GPU open-weights self-host path.
- **Overall Score: 70/100.** Half-up mean of the five quality dims (74+62+73+68+72)/5 = 69.8 → 70 — a credible open-weights long-horizon agent workhorse with fast, self-hostable serving; independent benchmark coverage is still too thin to place it higher.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Mistral docs and blog, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
