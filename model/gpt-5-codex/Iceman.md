# GPT-5 Codex — findings by Iceman

- Source: OpenAI / GPT-5-Codex
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI’s GPT-5-Codex (September 2025) is a coding-specialized GPT-5 variant optimized for agentic software engineering in Codex-like environments, with adaptive reasoning effort, long-context support, and strong code editing/review workflows.
- **Provider / access:** OpenAI Codex surfaces (CLI, IDE extension, cloud, GitHub code review) and OpenAI Responses API (model docs state Responses API only for this model). Local metadata lists `opencode/gpt-5-codex` and `noFreeId`.
- **Release / knowledge:** Announced **September 15, 2025** (“Introducing upgrades to Codex”). OpenAI developer model docs list knowledge cutoff **September 30, 2024** and status **Shut down** (snapshot `gpt-5-codex`).
- **IDs:** `gpt-5-codex`, `GPT-5-Codex`.
- **Context window:** 400,000 tokens context; 272,000 maximum input tokens; 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output (OpenAI developer docs/models.dev/AA).
- **Pricing (as of announcement/docs; historical/deprecated context):** OpenAI docs list **$1.25 / $10.00 per 1M input/output tokens** with **$0.125 cached input**. Local metadata and models.dev/provider listings show provider-specific rates (e.g. OpenCode Zen $1.07/$8.50). Model is marked shut down in developer docs; availability/pricing may be historical.
- **Architecture:** Proprietary OpenAI reasoning/coding model trained for agentic software engineering. Architecture and parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed OpenAI’s “Introducing upgrades to Codex” announcement, OpenAI developer model documentation, Artificial Analysis, models.dev, and local metadata/prior report. The announcement describes benchmark/evaluation results (including SWE-bench Verified and code refactoring tasks) but key numeric results are presented in charts/images and were not reliably text-extractable in this pass; therefore I do **not** treat local metadata claims (e.g. SWE-bench Verified 74.5%, code-refactor 51.3%) as independently verified scored inputs. I convert to a cautious provisional scored report based on verified specs/capabilities, official qualitative performance claims, and deprecation/shutdown status.

Agent / tool use:

- Optimized for agentic coding in Codex/Responses environments with tool use, streaming, structured outputs, function calling, image input, web search support, and prompt caching (OpenAI developer docs).
- Announcement reports strong agentic behavior: adaptive thinking time, long-running autonomous work on complex tasks (reported >7 hours in testing), iterative implementation/testing/fixing, and integrated code review workflows.
- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas: **no directly extracted standardized public numeric score found** for this exact model in this pass.

Reasoning / knowledge:

- Reasoning-token support documented; announcement describes dynamic thinking allocation (uses far fewer tokens on simple turns and thinks longer on complex turns) and improved reliability/steerability for coding tasks.
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: **no directly extracted verified public score found**. Artificial Analysis currently shows deprecated/N-A intelligence view for this model.

Coding:

- Official announcement emphasizes real-world software engineering performance (building projects, adding features/tests, debugging, large-scale refactors, code review), improved code quality/steerability, and chart-reported evaluations including **SWE-bench Verified** and **code refactoring tasks** (numeric values not reliably text-extracted in this pass).
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no directly extracted verified public numeric score found** in this pass (chart/image context).

Long context:

- **400K context window** (272K max input, 128K max output) verified in OpenAI docs.
- No standalone long-context retrieval benchmark score extracted.

Multimodal:

- **Text and image input; text output** verified. Announcement notes Codex workflows can use images/screenshots and visually inspect progress in cloud environments.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) reflecting a coding-specialized, now shut-down/deprecated model with strong documented agentic coding capabilities but limited directly extractable standardized benchmark numerics in this pass.

- **Tool use: 84/100.** Strong documented agentic coding/tooling profile (Responses API tools/function calling/web search/structured outputs, adaptive long-horizon execution, iterative test/fix loops, code review workflows), but lacking directly extracted standardized agent benchmark numerics in this pass.
- **Reasoning: 80/100.** Reasoning-token support and adaptive thinking behavior are clearly documented for complex software tasks; however, standard repo-category reasoning benchmark numerics were not directly extracted.
- **Context window: 82/100.** Large verified 400K context (272K input / 128K output) is strong for repository-scale coding workflows, though no extracted long-context retrieval benchmark evidence.
- **Multimodal: 66/100.** Verified image+text input (screenshots/designs) useful for coding/review workflows, but output is text-only and no extracted multimodal benchmark numerics.
- **Coding: 86/100.** Purpose-built for agentic coding with official claims of strong real-world software engineering/refactoring/code-review performance (including charted SWE-bench/refactor evaluations), but exact standardized numerics were not text-extracted/verifiable in this pass; scored conservatively.
- **Cost efficiency: 55/100.** Historical pricing was competitive for a coding specialist ($1.25/$10 with cached input discount), but developer docs list the model as **shut down** and AA marks it deprecated, reducing current practical value/availability.
- **Overall Score: 80/100.** Mean of the five non-cost dimensions (Tool 84, Reasoning 80, Context 82, Multimodal 66, Coding 86) rounded to nearest integer; historically strong coding/agent model with significant caveats on current availability and limited text-extracted benchmark numerics.

> Caution: Scores are provisional estimates based on verified specs and attributable official qualitative/capability evidence (OpenAI announcement/docs, AA/models.dev). Chart-reported benchmark numerics (including any SWE-bench/refactor values cited in local metadata) were not independently text-extracted in this pass and were not used as scored inputs.

### Source comparison / conflicts

- **Specs/capabilities/pricing:** OpenAI developer docs, announcement, AA, and models.dev broadly align on core identity/specs (400K/128K, text+image in/text out, Responses API focus, coding specialization, $1.25/$10 base pricing context). Provider-specific pricing varies.
- **Status:** Developer docs list model as **Shut down** (snapshot `gpt-5-codex`); AA labels it deprecated and suggests newer Codex releases.
- **Benchmarks:** Announcement references SWE-bench Verified and code refactoring evaluations in charts/notes but numeric values were not reliably extracted as text; local metadata claims (74.5%/51.3%) remain unverified in this pass.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`/API fetches) across OpenAI announcement, OpenAI developer model docs, Artificial Analysis, models.dev, and local metadata/prior report review; compared specs/capabilities/status and noted chart-only benchmark extraction limits.
- Research performed (>=10 successful independent web fetch/search attempts): OpenAI upgrades-to-Codex announcement (webfetch and shell fetch attempts), GPT-5 system card URL attempt (403), OpenAI developer model docs (webfetch + shell fetch), platform docs URL fetch, introducing-codex URL attempt (403), Artificial Analysis model page (shell + webfetch), OpenRouter model page fetch attempts (including 404/API lookup), models.dev model page (shell + webfetch), OpenAI help release notes URL attempt (403), system card PDF URL attempt (404), local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [Introducing upgrades to Codex (OpenAI)](https://openai.com/index/introducing-upgrades-to-codex/)
  - [GPT-5-Codex model docs (OpenAI Developers)](https://developers.openai.com/api/docs/models/gpt-5-codex)
  - [GPT-5 Codex on Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-codex)
  - [GPT-5-Codex on models.dev](https://models.dev/models/openai/gpt-5-codex)
  - Local repository metadata consulted: `model/gpt-5-codex/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
