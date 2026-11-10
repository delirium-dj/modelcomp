# Muse Ember 1.0 — findings by Step 5 Preview

- Source: Meta / `muse-ember-1.0` (Meta Model API; `meta/muse-ember` on OpenRouter; `opencode/muse-ember-1.0` on OpenCode Console)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's low-cost, high-efficiency reasoning model for the work agents repeat all day — tool calls, coding subtasks, routing, extraction from long documents — released 2026-11-09 as `muse-ember-1.0` on the Meta Model API and in Muse Code. It is the revealed successor of the retired "Crouton Alpha" stealth preview (same 1M-ctx, free-tier route, retired 2026-11-09), and unlike Muse Spark Open / Muse Glimmer it ships as closed, API-only weights.
- **Provider / access:** Meta Model API (`muse-ember-1.0`), Muse Code, OpenRouter (`meta/muse-ember`), OpenCode Console (`opencode/muse-ember-1.0`, Chat Completions), Inworld (`meta/muse-ember-1.0`, OpenAI-compatible), plus Google Cloud and Oracle Cloud partner listings. No free tier on the paid routes (the Crouton Alpha free stealth route was retired on reveal).
- **Release / knowledge:** released 2026-11-09; knowledge cutoff not published by Meta.
- **IDs:** `meta/muse-ember-1.0`; OpenCode route `opencode/muse-ember-1.0`. No Free ID exists.
- **Context window:** 1,000,000 tokens (1,048,576 max input) with 524,288 max output — Google Cloud partner-model page and Inworld agree on 524.3K; The AI Rankings' spec sheet lists 512K. Verified by two vendor sources, so the higher figure is used.
- **Modalities:** text + image input, text output (Google Cloud partner page; Inworld adds document/File input). The AI Rankings' spec sheet claims text, image, audio and video input — that wider claim is not corroborated by Google's or Inworld's model pages, so it is treated as unverified for scoring.
- **Pricing (as of 2026-11-10):** $0.10 / 1M input and $0.50 / 1M output for prompts up to 200K tokens; $0.30 / 1M input and $1.50 / 1M output above 200K; cached input $0.004 / 1M (up to 200K, $0.012 above) — identical on Meta's API, OpenCode Console and OpenRouter. Artificial Analysis measured $0.14 per completed Intelligence Index task (Haiku 5.5: $0.41).
- **Architecture:** proprietary, API-only; parameter count not published; reasoning model with vision and function calling.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA (business workflows): **37.8%** (Artificial Analysis run via Meta's launch table; Claude Haiku 5.5 13.9%)
- Coding Agent Index (AA): **46** (vs Claude Haiku 5.5's 37)
- Terminal-Bench 4.0: **40.9%** (vs Haiku 5.5 39.2% — different harnesses per model: mini-swe-agent for Ember, Claude Code for Haiku; not a like-for-like row)
- OSWorld 2.1 (computer use, Meta internal): **69.5%** (Haiku 5.5 68.9%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no standalone per-model score published
- Claw-Eval / ClawProBench: no verified public score found — noted N/A
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0.1: **36** at max effort — level with Claude Haiku 5.5 (36), above DeepSeek V4.1-Flash (33) and GPT-6 Luna (28); **34** at xhigh; measured cost $0.14 per index task, the cheapest model at score 36
- Output speed: **440 tokens/s**; time to first answer token **4.7s** (Artificial Analysis; Haiku 5.5 ≈ 182s)
- GPQA Diamond: no verified public score found (Meta published no GPQA result)
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- FrontierCode 2.0 (agentic coding, AA): **27.2%** (Claude Haiku 5.5 34.9% — Ember trails on this row)
- Coding Agent Index (AA): **46** (Haiku 5.5 37 — Ember leads on this row; the two rows disagree)
- SWE-bench Verified / SWE-bench Pro: **no verified public score found** — Meta published no SWE-bench figure for Muse Ember
- LiveCodeBench: no verified public score found
- SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found

Long context:

- 1M-token window verified (Google Cloud, Inworld); no MRCR / RULER / GraphWalks retrieval figure reported at any window length.

### Normalized scores (1–100)

- **Tool use: 58/100.** Mid-band evidence only: Terminal-Bench 4.0 40.9% (below the 45–60% mid reference, and measured on a different harness than Haiku's), AutomationBench-AA 37.8%, OSWorld 2.1 69.5%, Coding Agent Index 46. Tau3-Banking, GDPval-AA, Claw-Eval and Toolathon are all unreported — the methodology notes the missing Claw-Eval rather than guessing — so it lands in the middle of the 50–70 band, far from the frontier 90–100.
- **Reasoning: 65/100.** The AA Intelligence Index 36 at max effort (level with Haiku 5.5, cheapest per task) sits at the top of the rubric's mid band (index 20–35 → 55–65); the 4.7s TTFT and 440 tok/s speed show efficiency, not depth. No GPQA/HLE/CritPt numbers exist to lift it into the frontier band.
- **Context window: 96/100.** 1,048,576-token input window with 524,288 max output sits in the ≥1M tier (95–100); the 100 level needs ≥98% retrieval at 512K+ and no MRCR/RULER retrieval figure is published.
- **Multimodal: 75/100.** Text + image input (plus document/File input on Inworld) with text-only output puts it at the bottom of the +PDF band (75–90); The AI Rankings claims audio and video input, but neither Google's nor Inworld's model page corroborates it, so the audio band (90–100) is not applied.
- **Coding: 62/100.** FrontierCode 2.0 27.2% trails even Haiku 5.5 (34.9%) on the same AA harness, and no SWE-bench Verified/Pro, LiveCodeBench, SciCode or Vibe Code Bench number exists; the Coding Agent Index 46 lead over Haiku 37 is the one positive row. Sits in the 60–75 zone the rubric assigns to mid-tier coding.
- **Cost efficiency: 98/100.** $0.10/$0.50 per 1M (≤200K) with a $0.004 cache read lands in the ~$0.10/$0.20 reference band (97–99), and the $0.14 measured cost per AA-index task — a third of Haiku 5.5's $0.41 at the same index score — is the cheapest route to that quality level tracked here.
- **Overall Score: 71/100.** Mean of Tool use 58, Reasoning 65, Context window 96, Multimodal 75, Coding 62. Best fit: the cheap, fast workhorse tier for high-volume agent loops — routing, extraction, tool calls and coding subtasks at 440 tok/s and $0.14 per index task — explicitly not a frontier reasoning or agentic-coding model (pair it with Muse Wonder / Muse Spark for hard problems, as Meta itself suggests).

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-10
- Method: public internet research (The AI Rankings' Muse Ember benchmark/spec sheet aggregating Artificial Analysis runs and Meta's launch table, Google Cloud's official partner-model page, Inworld's model/pricing page, and the OpenCode Console catalog); scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Unreported benchmarks are marked "no verified public score found" rather than estimated.
- Reference URLs:
  - [The AI Rankings — Muse Ember benchmarks, pricing and specs](https://theairankings.com/meta/muse-ember/)
  - [Google Cloud — Muse Ember 1.0 partner-model page (token limits, capabilities, release date)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/meta/muse-ember-1-0)
  - [Inworld — Muse Ember 1.0 pricing, specs and API access](https://inworld.ai/models/meta-muse-ember-1-0)
  - [OpenCode Console docs — model catalog (Muse Ember 1.0 route and pricing)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
