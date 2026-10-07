# Gemini 3.8 Flash Cyber — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.8 Flash Cyber (`gemini-3.8-flash-cyber`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Newly discovered model.** Not previously tracked in `model/` — added during this
> research scan (discovered via Google's September 2026 Gemini 3.8 release wave).

## Model card

- **Name:** Gemini 3.8 Flash Cyber (no "Free" tier; no public pricing at all)
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash, announced 2026-09-02 alongside the general-purpose model. It shares the same sparse MoE foundation — Google says both are "powered by the same foundational intelligence" — but its job is narrow: find, validate and patch security vulnerabilities across real codebases. It is the second model in the Cyber lineage, succeeding the July 2026 Gemini 3.5 Flash Cyber pilot, and it replaces CodeMender's invite-only rollout with the named **Fairwind Program** (650+ partner organizations at launch).
- **Provider / access:** **Not on the public API.** No self-serve key, no AI Studio quota, no Vertex AI listing — access requires a reviewed application through Google's Fairwind Program (government authorities, critical-infrastructure operators, software maintainers). Publicly named partners include Armadin, Palo Alto Networks, Snowflake and Wiz. Proprietary, closed-weight.
- **Release / knowledge:** Announced 2026-09-02. Training-data cutoff and a model-specific data-retention policy were not published.
- **IDs:** `gemini-3.8-flash-cyber` (vendor/internal). No public API id and no OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens with a 65,536-token max output — inherited from Gemini 3.8 Flash, enough to hold a large monorepo or a long commit history in a single scanning pass.
- **Modalities:** text and code input; text (vulnerability reports) and code (patches) output. Google does not advertise the image, video or audio ingestion of mainline Gemini 3.8 Flash for this variant — its scope is code scanning. Tool use, function calling and structured output are inherited from the base architecture.
- **Pricing (as of 2026-10-06):** **no per-token pricing published.** Nothing to compare against mainline Gemini 3.8 Flash's $0.75/$3.75; expect terms negotiated per organization rather than governed by a public policy. Google's own chart positions the model as Pareto-optimal on CWE-Bench, with the leading frontier model sitting at roughly 3× its cost per rollout.
- **Architecture:** sibling of Gemini 3.8 Flash (sparse Mixture-of-Experts Transformer); the Cyber fine-tune's own architecture and parameter count are not published. It ships with **more permissive cyber-offence mitigations** than the mainline model — precisely why access is restricted to vetted defenders.

### Raw benchmarks found

Agent / tool use:

- CyberGym (autonomous vulnerability discovery) Pass@1: **86.2%** (Google eval table) — ahead of GPT-5.5 Cyber (85.6%), Anthropic's unrestricted-tier Claude Mythos 5 (83.8%), GPT-5.6 Sol (83.6%) and its predecessor Gemini 3.5 Flash Cyber (77.5%)
- CWE-Bench (patch generation) Pass@1: **47.2%** (Collinear AI / Google) — versus **47.8%** for the leading frontier model, on a Pareto-optimal cost curve (that model sits at ~3× cost per rollout); nearly half of proposed fixes resolve the underlying weakness rather than just flagging it
- Real-world vulnerability discovery across 20 programming languages: **71.0%** success (Google internal benchmark) — versus 58.9% for Gemini 3.7 Flash and 46.6% for Gemini 3.5 Flash Cyber
- Gray Swan IPI (15 attempts) attack success rate: **6.0%** (Google eval chart — lower is better) — ahead of Gemini 3.7 Flash's 9.2% and GPT-5.6 Sol's 27.0%, behind Claude Opus 5's 4.8%
- Corroboration: Google's Chrome Security team reports **2.6× more correct patches** than the best commercial models of larger size; Wiz measured **7.5–9.7 points higher recall** on its internal penetration-testing benchmark at **2.3–5.2× lower cost**; Google Cloud's Vulnerability Research unit used it to find a critical foundational vulnerability in **under two hours** (a discovery Google says usually takes months).
- Terminal-Bench 2.1 / Tau3, GDPval-AA, Claw-Eval, Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / MMLU-Pro / HLE / CritPt / LCR: **not disclosed** — Google published no general-purpose benchmarks, so buyers cannot compare this fine-tune to frontier models outside cyber-specific evals

Coding:

- CWE-Bench Pass@1 47.2% and 71.0% cross-language vulnerability discovery are the published coding signals (above)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**
- Coverage note: the predecessor was JavaScript/V8-engine-focused; 3.8 Flash Cyber broadens this to 20 programming languages per Google's published test scope.

Long context:

- no MRCR/RULER/GraphWalks recall value published for the Cyber variant; the 1M window is inherited from the base model.

### Normalized scores (1–100)

- **Tool use: 90/100.** 86.2% CyberGym Pass@1, 71% cross-language discovery and a 47.2% patch-pass rate — corroborated by three separate teams — make it a genuinely capable narrow agent; capped by the complete absence of Terminal-Bench/Tau3/multi-tool agent benchmarks.
- **Reasoning: 70/100.** No GPQA, MMLU-Pro or HLE figure was published at all, so the score reflects demonstrated domain reasoning plus the base Gemini 3.8 Flash lineage rather than measurement.
- **Context window: 92/100.** 1,048,576 tokens with 65,536 output is enough for whole-monorepo scanning; no recall-at-depth benchmark and no context-caching support cap it.
- **Multimodal: 15/100.** Text and code only — the image, video and audio ingestion of mainline Gemini 3.8 Flash is not advertised for this variant.
- **Coding: 85/100.** Patch generation at 47.2% Pass@1 judged on whether the weakness is actually resolved, plus 20-language discovery coverage and Chrome Security's 2.6× patch claim; no standard software-engineering benchmark exists.
- **Cost efficiency: 50/100.** No published price and no self-serve path — cost is negotiated inside the Fairwind Program, so value cannot be assessed from the outside; the score reflects gated access rather than a rate.
- **Overall Score: 70/100.** (90 + 70 + 92 + 15 + 85) / 5 = 70.4 → **70** (Cost efficiency never enters Overall). Best fit: government, critical-infrastructure and large software-maintainer security teams doing continuous vulnerability triage and patching; everyone else should use mainline Gemini 3.8 Flash.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (Google DeepMind eval tables via Vellum and explainx.ai, the Google Fairwind Program post, Collinear AI CWE-Bench, partner validation reports from Chrome Security / Wiz / Google Cloud Vulnerability Research); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
