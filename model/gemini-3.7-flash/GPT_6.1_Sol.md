# Gemini 3.7 Flash — findings by GPT 6.1 Sol

- Source: Google DeepMind / `gemini-3.7-flash` historical model
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's August Flash workhorse for coding, multimodal intake and agents. Historical 3.7 results are not relabeled as measurements of a successor served by an alias.
- **Provider / access:** Google Cloud GenerateContent, Interactions preview and OpenAI-compatible Chat Completions [S1]. Gemini Developer API historical access documented at launch [S2].
- **Release / knowledge:** August 13, 2026; Google Cloud lists GA with retirement January 28, 2027 [S1]. March 2026 knowledge cutoff is secondary information from Kingy's model-card review, not verified primary card text here [S5].
- **IDs:** `gemini-3.7-flash`; secondary documentation review says the Developer API alias now routes to 3.8, whereas the current Cloud page still lists 3.7 and its future retirement [S1,S5]. Routing remains surface-specific and unresolved without the inaccessible Developer API page. No Zen Free ID verified.
- **Context window:** 1,048,576 tokens; maximum output 65,536 [S1].
- **Modalities:** Text/image/audio/video/PDF input, text output. Low/medium/high thinking, default medium; function calling, execution, grounding, structured output, caching, agentic video and preview computer use. Live API unsupported [S1].
- **Pricing (as of 2026-10-16):** Published launch promotion $0.75 input / $3.75 output per million tokens through December 31, then $1.50/$7.50 [S2,S6]. AA lists 90% cache discount, equivalent to $0.075 input on the promotional tier [S3]. Thinking is billable output; no verified free production tier.
- **Architecture:** Proprietary; parameter count undisclosed [S3].

### Raw benchmarks found

Agent / tool use:

- AutomationBench **30.4%**, vendor launch [S2].
- Finance Agent v2 **59.04% ±0.27, #6/78**; Harvey Legal Agent **8.75% ±2.15**; SRE Bench **4.58% ±1.29**, independent Vals high effort [S4].
- Terminal-Bench 4.0 **12.12% ±3.03**, Vals [S4].
- Terminal-Bench 2.1 **85.8%**, OSWorld 2.0 **47.9%**, GDPval-AA v2 **1525 Elo**, vendor launch chart transcribed by Kingy [S5]; secondary transcriptions, not independent Kingy runs.
- Tau3-Banking / Claw-Eval / ClawProBench / MCP-Atlas / Toolathon: no verified public score found in inspected direct sources.

Reasoning / knowledge:

- GPQA Diamond **93.94% ±1.49**, MMLU Pro **90.12% ±0.30**, LegalBench **87.26% ±0.42**, Vals [S4].
- Artificial Analysis Intelligence Index **39, #62/217**, high effort, current v4.3.2; **$0.93/task**, **285.3 output tokens/s** [S3].
- Historical AA index **56 high**, quoted by Kingy with its dated launch capture [S5]. Different index snapshot, not an unchanged-test degradation measurement.
- Vals Index **51.27% ±1.10, #27/48**; ProofBench v1.1 **58.00% ±4.96** [S4].
- HLE / CritPt / AA-LCR / MLCR / Omniscience accuracy and hallucination rate: no verified exact score found in inspected stronger direct evidence.

Coding:

- DeepSWE v1.1 **65.3%**; FrontierCode 1.1 Main **43.6%**; WebDev Arena **1588 Elo**, official launch [S2,S6].
- LiveCodeBench **88.65% ±0.92**, Vibe Code Bench v1.1 **70.39% ±4.84**, Code Migration **34.80% ±4.22**, ProgramBench **0.00%**, Vals [S4].
- SWE-bench **80.80% ±1.76**, Vals current row; not relabeled Verified without its underlying methodology [S4].
- Terminal-Bench Science **7.14% ±3.10** [S4].
- SWE-Pro / SciCode: no verified exact score found.

Long context and multimodal:

- GDM-MRCR **97.0% at 128K**, vendor-chart secondary transcription [S5]; not a measured million-token retrieval guarantee.
- MMMU Pro **88.96% ±0.75**, Vals [S4]; GDP.pdf **34.0%**, vendor launch [S2].
- CharXiv no tools **84.5%**, with tools **88.7%**, secondary vendor-chart transcription; both 0.7 points below 3.6 under the quoted setup [S5].

### Evidence comparison and research trail

Three distinct DuckDuckGo searches: `"Gemini 3.7 Flash" official Google documentation`; `"Gemini 3.7 Flash" independent Artificial Analysis benchmarks`; `"Gemini 3.7 Flash" review pricing limitations`. Directly read current Cloud specification, Google and Antigravity launch posts, independent AA and Vals profiles, and Kingy's source-labeled review. The Developer API model page fetch failed with a transport error, so its purported alias routing is explicitly secondary evidence.

Lifecycle claims require host qualification: AA's deprecated label limits its own continuing performance benchmarking; Cloud lists a specific future retirement; Kingy's October 12 update says the Developer API alias already routes to 3.8 [S1,S3,S5]. These do not justify transferring fresh successor measurements to historical 3.7. Vals uses $1.50/$7.50 standard rates while AA and the launch promotion use half those rates [S2–S4]; cost/test figures cannot be compared without rate normalization. Google's DeepSWE predecessor baseline is 49.0%, versus 48.6% in Kingy's chart transcription; primary 49.0% is retained if discussing a delta [S2,S5]. Strong LiveCodeBench/GPQA performance coexists with TB4 12.12%, ProgramBench zero and low SRE results: the model's strengths are real but do not imply universal long-agent competence. Secondary Kingy explicitly did not run the model; its score and prose are not independent test evidence [S5].

### Normalized scores (1–100)

- **Tool use: 83/100.** Useful automation, finance and older terminal results, capped by weak modern terminal/SRE and incomplete lifecycle reproducibility [S2,S4,S5].
- **Reasoning: 88/100.** GPQA 93.94% and MMLU Pro 90.12% show strong academic reasoning; present difficult-agent results and missing scientific subscores limit ceiling credit [S3,S4].
- **Context window: 95/100.** Official million-token capacity earns the top tier, without ≥98% retrieval beyond 512K [S1,S5].
- **Multimodal: 95/100.** Native audio/video/image/PDF intake with strong MMMU Pro; output remains text [S1,S4].
- **Coding: 86/100.** DeepSWE 65.3% and LiveCodeBench 88.65% support strong coding, capped by low migration/ProgramBench/modern-terminal results [S2,S4].
- **Cost efficiency: 91/100.** Promotional $0.75/$3.75 and fast decoding support value, but the scheduled price increase and per-task reasoning use must be retained [S2,S3].
- **Overall Score: 89/100.** (83 + 88 + 95 + 95 + 86) / 5 = 89.4 → 89; historical fit is economical multimodal coding and document workflows. Cost excluded.

### Sources

- [S1] https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-7-flash — primary specs, GA and January 28 retirement.
- [S2] https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/ — primary launch benchmarks and promotion expiry.
- [S3] https://artificialanalysis.ai/models/gemini-3-7-flash — independent high-effort v4.3.2 snapshot and economics.
- [S4] https://www.vals.ai/models/google_gemini-3.7-flash — independent suite, uncertainties and high-effort configuration.
- [S5] https://kingy.ai/ai/gemini-3-7-flash-review-benchmarks-pricing/ — secondary launch transcription and later routing notice; no original testing.
- [S6] https://antigravity.google/blog/gemini-3-7-flash-in-google-antigravity — official integration and launch-score corroboration.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research using three distinct searches and official, independent and secondary source comparisons. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
