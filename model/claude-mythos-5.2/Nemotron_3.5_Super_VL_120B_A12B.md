# Claude Mythos 5.2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`claude-mythos-5-2`), Amazon Bedrock `global.anthropic.claude-mythos-5-2`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's frontier model for cybersecurity and life sciences research. Same underlying model as Claude Fable 5.2; the two differ in safeguards and access. Available through Anthropic's Cyber Verification Program and Life Sciences Verification Program only — restricted to approved organizations.
- **Provider / access:** Amazon Bedrock (`bedrock-runtime` endpoint, modelId `global.anthropic.claude-mythos-5-2`). Supports Messages API, Responses API, Chat Completions, Converse API, and Invoke API. Beta service subject to AWS Service Terms.
- **Release / knowledge:** Launched November 9, 2026 on Amazon Bedrock. Knowledge cutoff: June 2026. EOL no sooner than November 9, 2027.
- **IDs:** `global.anthropic.claude-mythos-5-2` (Bedrock modelId). No public non-Bedrock endpoint confirmed.
- **Context window:** 1M tokens context; max output 128K tokens.
- **Modalities:** Audio, image, speech, and video in; image, speech, and text out. Supports computer use (Beta: `computer_20251124`, `computer_toolset_20260801`), browser toolset, bash tool, text editor tool, memory tool. Structured outputs, prompt caching (up to 512 checkpoints per request, 4 max per checkpoint, 5 min–1 hour TTL).
- **Pricing (as of 2026-11-11):** Not publicly disclosed on the fetched Bedrock model card; access restricted to verified organizations via Anthropic's verification programs.
- **Architecture:** Frontier dense/transformer-class model (parameter count not disclosed). Adaptive thinking always on; configurable reasoning effort (low, medium, high, xhigh, max; default high). Preserved thinking blocks shared with Claude Fable 5.2.

### Raw benchmarks found

No independent third-party benchmark scores were found in fetched sources for Claude Mythos 5.2 specifically. The model is in preview/Beta and access is restricted. Capabilities are described by Anthropic/AWS rather than measured on public leaderboards.

No verified public scores found for: GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience Accuracy/Hallucination Rate, SWE-bench Verified/Pro/Multilingual, LiveCodeBench, SciCode, Terminal-Bench, tau2-bench/tau3-bench, APEX, IFBench, BrowseComp, WebVoyager, OSWorld-Verified, Vibe Code Bench, DeepSWE, MRCR/RULER/GraphWalks, AA-Briefcase-Lite, AutomationBench-AA, MMLongBench-Doc, AA-LCR.

### Normalized scores (1–100)

Derived from the available specifications using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Comprehensive tool ecosystem: computer use (Beta), browser toolset, bash, text editor, memory tool, structured outputs, prompt caching; capped by Beta/restricted access and no published tool-use benchmark scores.
- **Reasoning: 92/100.** Adaptive thinking always on with configurable effort up to `max`; preserved thinking blocks; frontier Anthropic model positioning; capped by absence of public reasoning benchmark scores (GPQA, HLE, etc.).
- **Context window: 95/100.** 1M-token context window with 128K max output; verified on AWS Bedrock model card; capped only by lack of published long-context retrieval scores at full window.
- **Multimodal: 90/100.** Audio, image, speech, video input; image, speech, text output; broad multimodal coverage; capped by no published vision/audio benchmark scores.
- **Coding: 90/100.** Frontier Anthropic model with computer use and agentic workflow support; capped by absence of public SWE-bench/LiveCodeBench scores.
- **Cost efficiency: 50/100.** Pricing undisclosed; restricted access implies enterprise pricing; not counted toward Overall.
- **Overall Score: 91/100.** Half-up mean of (88 + 92 + 95 + 90 + 90) / 5 = 91. Best-fit recommendation: restricted frontier model for cybersecurity and life sciences research; verify on your own tasks before production use given limited public benchmark data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-11
- Method: public internet research (AWS Bedrock model card documentation); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5.2 — Amazon Bedrock model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-mythos-5-2.html)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
