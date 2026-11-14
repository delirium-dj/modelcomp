# Iceman — findings by Iceman

- Source: OpenCode / Iceman Free (`opencode/iceman-free`, stealth slot)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (Iceman Free)
- **Short description:** OpenCode’s anonymous stealth reasoning/text model offered as a free tier on OpenCode Console/Go, with large context and active tool-calling support for coding and general text workflows.
- **Provider / access:** OpenCode Console inference (`iceman-free`, `opencode/iceman-free`) via OpenCode-compatible endpoints; listed in OpenCode Console models documentation. Free-tier availability is time-limited per OpenCode docs.
- **Release / knowledge:** Stealth/unannounced model identity; no public vendor model card with full architecture/training details found. Knowledge cutoff not stated in accessible sources.
- **IDs:** `iceman`, `iceman-free`, `opencode/iceman-free`.
- **Context window:** 262,144 tokens input / 131,072 tokens output (local metadata; consistent with OpenCode-hosted stealth/free model positioning).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-14):** **Free** on OpenCode Console during free period (OpenCode docs/pricing). Privacy note: prompts/completions are retained and used to improve the model during the free period (OpenCode docs).
- **Architecture:** Proprietary/undisclosed stealth model. Architecture and parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed OpenCode Console models/pricing/changelog documentation, GitHub issues/search results, AA/models.dev/OpenRouter/HF search attempts, and local metadata/prior report. OpenCode docs provide attributable provider/access/spec/privacy evidence for the exact `iceman-free` model ID, but **no independently verifiable standardized public benchmark numerics** (SWE-bench, GPQA, AIME, LiveCodeBench, Terminal-Bench, AA Intelligence Index, etc.) were found for this exact stealth model. Local metadata references to StealthMark and qualitative claims were not independently verified from accessible official benchmark sources in this pass and are **not used as scored inputs**. Scores below are provisional normalized estimates based on verified specs/capabilities/access constraints.

Agent / tool use:

- OpenCode-hosted text model available for coding-agent use; tool execution/reasoning positioning indicated by local metadata/docs context, but no extracted standardized agent/tool benchmark numerics.
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Stealth reasoning model positioning indicated in metadata; no extracted standardized reasoning benchmark numerics.
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: **no verified public score found**

Coding:

- Offered in OpenCode coding-model catalog/context, but no extracted standardized coding benchmark numerics.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- **262K input / 131K output** context stated (local metadata). No standalone long-context retrieval benchmark score extracted.

Multimodal:

- **Text-only** (local metadata). No multimodal benchmark evidence.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) for an anonymous/free stealth model with verified hosting/spec context but no extracted standardized public benchmark evidence.

- **Tool use: 55/100.** Positioned for agentic/coding use in OpenCode with tool-calling context implied, but stealth/undisclosed model with no independently verified agent benchmark numerics; scored conservatively.
- **Reasoning: 48/100.** Marketed/positioned as a reasoning model in metadata, but no independently verified reasoning benchmark numerics and limited public capability disclosure.
- **Context window: 78/100.** Large verified/claimed context window (262K in / 131K out) is strong for long coding sessions and document tasks, though practical long-context quality is unverified by extracted benchmarks.
- **Multimodal: 20/100.** Text-only input/output per available metadata.
- **Coding: 54/100.** Available as a coding-oriented free model in OpenCode, but no independently verified coding benchmark numerics; assessed cautiously.
- **Cost efficiency: 95/100.** Free on OpenCode Console during the free period, offering very high cost efficiency for experimentation and lightweight workflows (with data-retention/privacy tradeoff noted).
- **Overall Score: 51/100.** Mean of the five non-cost dimensions (Tool 55, Reasoning 48, Context 78, Multimodal 20, Coding 54) rounded to nearest integer; useful free/large-context stealth option, but capability evidence is limited and provisional.

> Caution: Scores are provisional estimates based on verified provider/access/spec/privacy context (OpenCode docs) and unverified qualitative metadata claims. No independently verified standardized public benchmark numerics for this exact model were used as scored inputs.

### Source comparison / conflicts

- **Provider/access/specs:** OpenCode Console models/pricing/privacy pages confirm `Iceman Free` as a listed free stealth model with free-period data-retention-for-improvement terms. Local metadata provides 262K/131K and text-only details; no conflicting official spec source found.
- **Benchmarks:** No attributable standardized benchmark numerics found across OpenCode docs, GitHub issues/searches, or AA/models.dev/OpenRouter/HF searches in this pass. Local metadata StealthMark/qualitative claims remain unverified.
- **Identity:** Stealth/anonymous model identity; architecture/parameter details undisclosed.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`/API fetches) across OpenCode Console models/pricing/changelog docs, GitHub issue/API searches, AA/models.dev/OpenRouter/HF search attempts, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts): OpenCode Console models docs (shell + webfetch), OpenCode pricing page, OpenCode Zen docs page, OpenCode changelog page (shell + webfetch), OpenRouter/models.dev/AA searches for iceman, GitHub API issue search for iceman in anomalyco/opencode, OpenRouter/models.dev searches for fledge/inkling context, OpenRouter model page attempts (404) and HF searches for inkling/fledge, local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [OpenCode Console models](https://opencode.ai/docs/console/models/)
  - [OpenCode pricing](https://opencode.ai/pricing)
  - [OpenCode changelog](https://opencode.ai/changelog)
  - Local repository metadata consulted: `model/iceman/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
