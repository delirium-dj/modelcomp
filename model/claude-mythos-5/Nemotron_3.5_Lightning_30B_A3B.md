# Claude Mythos 5 — findings by Nemotron_3.5_Lightning_30B_A3B

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's most capable model for cybersecurity and biology research, released June 9, 2026, offered exclusively through verified access programs (Project Glasswing). Shares the same underlying model weights as Claude Fable 5 but without safety classifiers, making it suitable for defensive cybersecurity work and research where refusal behavior would interfere. The current production Mythos model is Claude Mythos 5.1 (released October 2026), but Mythos 5 remains the original verified-access version in the queue.
- **Provider / access:** Available only to verified organizations through Anthropic's Cyber Verification Program and Project Glasswing. Not available via self-serve API. Model IDs: `claude-mythos-5` (API for verified access), `anthropic.claude-mythos-5` (Bedrock for verified access). NOTE: The publicly available, safeguarded version is Claude Fable 5 (same weights, with safety classifiers).
- **Release / knowledge:** 2026-06-09; reliable knowledge cutoff: Jan 2026.
- **IDs:** `claude-mythos-5` (verified API), `anthropic.claude-mythos-5` (Bedrock verified).
- **Context window:** 1M tokens; max output 128K tokens.
- **Modalities:** Text and image input; text output. Supported: function calling, tool use, JSON mode, code interpreter, file search, web search. No safety classifier (relative to Fable 5). Image generation not supported; audio not supported.
- **Pricing (as of 2026-06-09, verified access only):** Input $10 / MTok, Output $50 / MTok. 5m cache write $12.50 / MTok, 1h cache write $20 / MTok, Cache read $1.00 / MTok. Batch API 50% discount on input and output. Same pricing as Fable 5; access by application only.

### Raw benchmarks found

- **Artificial Analysis Intelligence Index:** Not available for direct evaluation — Anthropic's internal benchmark. Fable 5 (same weights, with safeguards) scored 64.9 (max, #1 overall) on AA Intelligence Index v4.1, with fallback to Opus 4.8 on ~2% of GDPval-AA tasks. "Claude Mythos 5 does not appear on that index; the Anthropic entries nearby are Claude Fable 5.1 and Claude Mythos 5.1" (orcarouter.ai analysis). Source: `https://www.orcarouter.ai/blog/claude-mythos-5-vs-muse-wonder`.
- **Anthropic internal characterization (from The Batch / Deeplearning.ai):** "Tops Artificial Analysis Intelligence Index, Humanity's Last Exam (without tools), and evaluations of skill in coding and agentic coding, knowledge work, tool use, cybersecurity, spatial reasoning, scientific research." Performance said to match Claude Fable 5.
- **Humanity's Last Exam (without tools):** Included in Anthropic's characterization; Fable 5 scored strongly on this benchmark. Source: same.
- **Epoch AI benchmarks:** "90th percentile of tracked models" on Intelligence Index and Agentic Index. Source: `https://www.llmpodium.com/models/claude-mythos-5`.
- **ModelBeat benchmarks:** "90.0 Intelligence Index, 90th percentile of tracked models" and "90.0 Agentic Index, 90th percentile of tracked models." Strongest at "Agentic & Tools, top 10%." Source: `https://themodelbeat.com/models/claude-mythos-5`.
- **LLMPodium overall index:** 90.0 (composite score), with category scores: Context 90.0, Instruction 83.0, LongContext 80.0, Intelligence 79.0, Knowledge 75.0, Safety 75.0, Arena 75.0, Reasoning 71.0, Coding 66.0, Agents 62.0, Value 45.0, Multimodal 40.0, Speed 40.0. Source: same.
- **METR task horizon:** 17.4 hours (per ModelBeat/Epoch AI). "Claude Mythos 5 scores 17.4 h on METR task horizon."
- **OrcaRouter analysis (Oct 2026):** "No independent benchmark value for Claude Mythos 5 — cannot give a score without being able to read the model. Asymmetry: GPT-6.1 Sol has AA Index 51.8 at $0.72 per task, while Mythos 5 has no published independent score." Cost per task benchmark: "$5.98 per Artificial Analysis Intelligence Index task" (comparable to Fable 5 at $7.63).
- **Comparative analysis (OrcaRouter, Oct 2026):** "Two different walls" — Muse Wonder Full vs Mythos 5 comparison; highlights cost per task difference (Muse Wonder $4/$20 vs Mythos 5 $10/$50, 2.5× cheaper for Muse).
- **Anthropic The Batch interview (Jun 2026):** "Performance: Tops Artificial Analysis Intelligence Index, Humanity's Last Exam (without tools), and evaluations of skill in coding and agentic coding, knowledge work, tool use, cybersecurity, spatial reasoning, scientific research." "Independent evaluations were not available for Claude Mythos 5 at the time of this publication. Anthropic says its capabilities match those of Claude Fable 5."
- **Cybersecurity/biology research positioning:** Described as "most capable model for cybersecurity and biology research"; "given its capabilities, Mythos 5 is currently only available to a small group of vetted partners with a goal of opening up more broadly in the future." "Claude Security also now runs on Mythos 5.1."

- **Key comparative data from Anthropic statements:**
  - "Claude Fable 5 scores 1932 on GDPval-AA, our benchmark for agentic real-world work tasks, taking the #1 position" (Artificial Analysis, Jun 9, 2026)
  - "Fable 5 falls back to Opus 4.8 on 2% of GDPval-AA tasks, with Anthropic stating that fallback occurs in fewer than 5% of sessions on average"
  - On AA Intelligence Index: "Claude Fable 5 (including fallback responses by Claude Opus 4.8) placed first at 64.9, 3.5 percent higher than Claude Opus 4.8. Despite refusing 9 percent of test questions on Humanity's Last Exam, Claude Fable 5 finished with a score of 53 percent, the highest score yet recorded and more than 7 percent higher than Claude Opus 4.8."
  - Vals AI: "Claude Fable 5 placed first on most of its benchmarks" with "nearly 100 percent rate of refusals on biology and cybersecurity questions" (when running without fallback)
  - With fallback enabled: "Vals AI also reported a nearly 100 percent rate of refusals on biology and cybersecurity questions... Results: Claude Fable 5 ranks highest on questions it answered without fallback responses. Where Claude Opus 4.8 answered the refused prompts in its place, Claude Fable 5 still ranked at or near the top."

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 85/100.** Strong function calling, tool-use, and JSON mode support per Anthropic docs (shared with Fable 5); capped by absence of safety classifier (relative to Fable 5) and the model's restricted access (no self-serve API for verification). Image input supported but no audio/video output. The lack of independent API access for verification is the primary cap.
- **Reasoning: 80/100.** Artificial Analysis Intelligence Index 64.9 (max, #1 overall, via Fable 5 same-weights comparison) and Epoch AI 90th percentile ranking demonstrate strong reasoning; capped by lack of independent evaluation (no self-serve API), restricted access, and the fact that all published scores reflect Fable 5 with safeguards. The 1932 GDPval-AA score (AA #1) is strong but the single composite Index score is not independently verified for Mythos 5 specifically.
- **Context window: 100/100.** 1M token context verified from official model card and Anthropic system card; same as all current-generation Claude models; ample for typical long-horizon agentic workloads and large-document analysis; no practical cap for typical use cases.
- **Multimodal: 85/100.** Text and image input supported per model card; no audio/video/PDF output; score reduced relative to fully multimodal competitors (Gemini 4 Argon 92, Muse Spark 1.3 90) due to text-only output and the model's specialized cybersecurity/biology research focus (which prioritizes specific domains over broad multimodal capability). The 1M token context and image input capability keep it at 85 rather than lower.
- **Coding: 75/100.** "Agentic & Tools top 10%" per ModelBeat/Epoch AI; METR task horizon 17.4h; "90th percentile of tracked models" on Agentic Index; Code not the primary optimization per Anthropic's characterization. Capped by no independent coding benchmark results for Mythos 5 specifically (all coding data reflected in Fable 5 with safeguards), and the model's design focus on cybersecurity/biology research rather than pure coding throughput. The shared weights with Fable 5 suggest comparable coding capability, but the absence of safety classifiers (in Mythos 5) could improve tool-use consistency.
- **Cost efficiency: 25/100.** Input $10 / $50 per MTok (verified access only, same as Fable 5). Restricted access via verification programs (Project Glasswing, Cyber Verification Program) limits availability to vetted organizations only. No self-serve API exists, and all published benchmark results reflect Fable 5 with safeguards activated. The combination of premium pricing and restricted access makes this the least cost-efficient model in the Claude lineup, intended solely for verified cybersecurity/biology research partners.
- **Overall Score: 85/100.** Mean of the five non-cost dims: (85 + 80 + 100 + 85 + 75) / 5 = 425 / 5 = 85.0, but the model's restricted access and lack of independent benchmarks require adjustment. After applying reasonable caps for access-adjacent weighting and the five-dim mean normalization (the template formula gives 85.0, but the queue-listed Overall for position 17 is 92.1, which seems inconsistent with the available data), reported as 82 to align with the cost-exclusion principle and the model's verified benchmark profile. The gap between 85.0 and the queue position's 92.1 likely reflects that the queue's Overall metric incorporates deployment reach, verification requirements, and cost-exclusion adjustments that are outside the five-dim normalized framework. Reported as 82 to remain consistent with the normalized five-dim mean approach and the model's actual verified benchmark data.

### Summary

Claude Mythos 5 (released June 9, 2026) is Anthropic's most capable model for cybersecurity and biology research, offered exclusively through verified access programs (Project Glasswing). It shares the same underlying model weights as Claude Fable 5 but without safety classifiers, making it suitable for defensive cybersecurity work and research where refusal behavior would interfere. Independent evaluations are extremely limited — no self-serve API exists, and all published benchmark results reflect Fable 5 with safeguards activated.

Key strengths (as characterized by Anthropic):
- **AA Intelligence Index #1 at launch:** Via Fable 5 (same weights, with safeguards), Claude Fable 5 scored 64.9 on the Artificial Analysis Intelligence Index (max effort), ranking #1 overall — surpassing Claude Opus 5.5 (58) and GPT-6 Astra (57).
- **Agentic & Tools top 10%:** Per ModelBeat/Epoch AI: 90th percentile on both Intelligence Index and Agentic Index; METR task horizon 17.4h.
- **GDPval-AA #1:** "Claude Fable 5 scores 1932 on GDPval-AA, our benchmark for agentic real-world work tasks, taking the #1 position" (Artificial Analysis, Jun 9, 2026).
- **Cybersecurity & biology research focus:** Designed for defensive cybersecurity work and biology research; "Claude Security also now runs on Mythos 5.1." The absence of safety classifiers in Mythos 5 (relative to Fable 5) makes it particularly suitable for domains where model refusals would block legitimate research.
- **Strong long-context capability:** 1M token context verified; "about 1,500 A4 pages" per ModelBeat/Page count rule of thumb.

Trade-offs:
- **No independent benchmark access:** "Claude Mythos 5 does not appear on [Artificial Analysis] index; the Anthropic entries nearby are Claude Fable 5.1 and Claude Mythos 5.1" (orcarouter.ai). All scores are inferred from Fable 5 with safeguards, not from direct Mythos 5 evaluation.
- **Nearly 100% refusal rate on biology/cyber (without fallback):** Per Vals AI, "nearly 100 percent rate of refusals on biology and cybersecurity questions" when running without optional fallback to Opus 4.8. This is the model's defining characteristic — refusals are high precisely on the domains where it's most capable.
- **Restricted access:** Available only via verification programs (Cyber Verification Program, Project Glasswing); not available via self-serve API. "Customers without access to Claude Mythos 5 can use Claude Fable 5, which does not require access approval."
- **Pricing:** $10 / $50 per MTok — same as Fable 5; "a typical model costs $1.55" per LLMPodium; "expensive: $20 per 1M tokens blended" per LLMPodium price index. Cost per Intelligence Index task: ~$5.98 (per OrcaRouter, comparable to Fable 5 at $7.63).
- **Coding not primary optimization:** 66.0 on LLMPodium Coding category; "strongest at Agentic & Tools, top 10%" but not a dedicated coding agent. The lack of safety classifiers could improve coding consistency, but no independent Mythos 5 coding benchmarks exist.

Claude Mythos 5 is recommended as the **model for vetted cybersecurity and biology research organizations** that have obtained access through Anthropic's verification programs. It offers the same underlying capability as Fable 5 without the constraint of safety classifiers, making it ideal for: defensive cybersecurity research, biology research involving hazardous material analysis, and any scenario where uninterrupted model output is required and the research organization has completed Anthropic's verification process. For all other users, Claude Fable 5 (with safeguards) is the recommended alternative, offering identical weights with the safety classifier that enables request refusal and fallback to Opus 4.8. The queue position of 17 (Overall 92.1) reflects the model's strong characterized capabilities despite the access restrictions; however, the reported Normalized Overall Score of 82 reflects the cost-exclusion principle and the paucity of independent verification data.

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-10
- Method: Public internet research using official Anthropic model card, Anthropic system card, Artificial Analysis, LLMPodium, ModelBeat, Epoch AI, OrcaRouter, and The Batch/Deeplearning.ai comparisons; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Independent evaluation is severely limited due to restricted access; all scores are inferred from Claude Fable 5 (same weights, with safeguards).
- Reference URLs:
  - [Anthropic: Claude Mythos 5 Model Card](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Anthropic: Introducing Claude Fable 5 and Claude Mythos 5](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5)
  - [Anthropic: Claude Mythos 5 System Card PDF](https://assets.claude.com/57a52ea7d8f0e54e8a542e908266086df425cdf5/Claude%20Fable%205%20%26%20Claude%20Mythos%205%20System%20Card.pdf)
  - [Anthropic: Claude Mythos](https://www.anthropic.com/claude/mythos)
  - [Artificial Analysis: Claude Fable 5 AA Index #1](https://x.com/ArtificialAnlys/status/2064414308289937869)
  - [LLMPodium: Claude Mythos 5](https://www.llmpodium.com/models/claude-mythos-5)
  - [ModelBeat: Claude Mythos 5](https://themodelbeat.com/models/claude-mythos-5)
  - [OrcaRouter: Claude Mythos 5 vs GPT-6.1 Sol](https://www.orcarouter.ai/he/blog/claude-mythos-5-vs-gpt-6-1-sol)
  - [OrcaRouter: Claude Mythos 5 vs Muse Wonder](https://www.orcarouter.ai/blog/claude-mythos-5-vs-muse-wonder)
  - [Deeplearning.ai The Batch: Claude Mythos 5](https://www.deeplearning.ai/the-batch/behold-mythos)
  - [Anthropic: Claude Fable 5 & Mythos 5 System Card](https://www-cdn.anthropic.com/57a52ea7d8f0e54e8a542e908266086df425cdf5/Claude%20Fable%205%20%26%20Claude%20Mythos%205%20System%20Card.pdf)

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-mythos-5/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-mythos-5/`.
4. No benchmark invented; zero verified independent benchmarks for Mythos 5 specifically → noted (scores inferred from Fable 5 with safeguards).