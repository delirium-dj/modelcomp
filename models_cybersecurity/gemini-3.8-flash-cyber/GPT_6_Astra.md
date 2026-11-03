# Gemini 3.8 Flash Cyber — findings by GPT 6 Astra

- Source: Google / `gemini-3.8-flash-cyber`
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** A cybersecurity-specific post-training version of Gemini 3.8 Flash, with its own model ID and allowlisted deployment. Shared foundational intelligence does not establish identical benchmark performance to ordinary Flash [S1, S2].
- **Provider / access:** Google Gemini Enterprise Agent Platform, GA behind an allowlist through the Google account team/Fairwind. GenerateContent and OpenAI-compatible Chat Completions are supported; Interactions and Live APIs are not [S1].
- **Release / knowledge:** Announcement September 2, 2026 [S2]; cloud model reference lists release September 16, 2026 [S1]. These describe announcement versus platform release, not necessarily a contradiction. No Cyber-specific knowledge cutoff verified.
- **IDs:** `gemini-3.8-flash-cyber`. No public Zen Free ID verified; program eligibility is not evidence of a free endpoint.
- **Context window:** **1,048,576 tokens**, maximum output **65,536**, explicitly documented for Cyber itself [S1].
- **Modalities:** Text/image/audio/video/PDF input, text output; thinking, structured output and implicit/explicit caching supported. Importantly, the current hosted reference explicitly marks function calling, grounding, code execution, URL context and computer use **not supported** [S1]. Agent-harness benchmark capability must not be mistaken for general hosted tool availability.
- **Pricing (as of 2026-10-19):** CloudPrice's October 18 Cyber-specific listing reports standard input **$0.75**, output **$3.75**, cache read **$0.075** per million tokens [S5]. This is secondary pricing evidence, not a first-party rate-card verification. Its separate reasoning-price and batch entries are not accepted as verified: the cloud reference explicitly says batch inference is unsupported. Google’s launch prices and future introductory-price expiry are explicitly attached to ordinary Flash; they are not silently transferred to Cyber [S1, S2].
- **Architecture:** Proprietary; Cyber-specific post-training is documented, parameter count and dense/MoE structure undisclosed [S1].

### Raw benchmarks found

Agent / tool use:

- **CWE-Bench v0: 47.2% pass@1**, **$3.64 average rollout cost**, Antigravity harness/high reasoning, on the original **100-task** held-out set [S3]. The deterministic verifier requires the vulnerability to be closed and existing tests to pass. Google independently cites the same 47.2% value [S2]; the benchmark owner attributes evaluation/publication to Artificial Analysis [S3].
- CyberGym: **86.2% pass@1**, a Google launch result transcribed by BenchLM with an explicit source link [S4]. Google’s retrieved launch prose identifies CyberGym and its C/C++ scope, but the exact numeric result is in a chart; therefore this number retains secondary-transcription status [S2, S4].
- Google's internal vulnerability discovery: **over 70% success** across **20 programming languages**, vendor-only evidence, not a public reproducible general-purpose benchmark [S2].
- Terminal-Bench 2.1, Tau2/Tau3, GDPval-AA, MCP-Atlas, Claw-Eval/ClawProBench and Toolathon: no verified public score found for this exact Cyber ID.

Reasoning / knowledge:

- GPQA Diamond, HLE, CritPt, AA-LCR/MLCR, AA Intelligence Index and Omniscience: no verified public score found for this exact Cyber ID. The ordinary Flash HLE and terminal results in the joint announcement and DataCamp review are deliberately not imported [S2, S6].
- BenchLM explicitly assigns Cyber **no overall score and no rank**, despite source-displayable cyber results [S4].
- The reasoning interpretation below is consequently low-confidence and grounded in demonstrated multi-step vulnerability diagnosis/patching, not fabricated general-knowledge percentages.

Coding:

- CWE-Bench v0 **47.2%**, with regression-preserving patch verification, supplies exact-model code-repair evidence [S3].
- Google says Chrome Security obtained **2.6×** as many correct patches as its commercial-model comparator; the comparator and complete task population are not specified in prose, so this is only a vendor anecdotal result [S2].
- SWE-bench Verified/Pro, LiveCodeBench, DeepSWE, SciCode, Vibe Code Bench: no verified public score found for Cyber. Security patching cannot establish broad software-engineering parity with the base model.

Long context and multimodal:

- Capacity and modalities are directly documented [S1]. No Cyber-specific MRCR/RULER/GraphWalks retrieval or visual/audio accuracy result verified.
- BenchLM lists Gray Swan IPI (15 attempts) **6.0%**, attributed to a later Google chart [S4]. Its abbreviated row does not establish directionality or full evaluation conditions; it is retained only as a lead, not a positive instruction-following accuracy or scoring input.

### Source comparison and conflicting findings

1. **Substantive new evidence:** Cyber-specific serving documentation now verifies ID, context and modalities, addressing the concrete gaps in this reporter's excluded October 4 report. The directly opened benchmark-owner leaderboard also verifies harness, dataset version and rollout cost. The earlier exclusion is not reactivated by copying base-Flash numbers.
2. **Benchmark version:** 47.2% belongs to CWE-Bench **v0**, not the newer **v1** 120-task leaderboard. The extracted website includes both versions. Comparing 47.2% directly to the newer 68% leaders would mix evaluation sets [S3].
3. **Independent evidence exists, but narrowly:** DataCamp calls for independent reproductions because most launch information comes from Google; the benchmark-owner CWE result supplies external patching evidence. BenchLM and DataCamp mainly aggregate vendor results and are not additional independent runs [S3, S4, S6].
4. **Agency versus API support:** Antigravity ran a successful agentic evaluation, yet the exact hosted model card denies native function calling and computer use. Both facts are retained; neither is overwritten by a generic “tools supported” assumption [S1, S3].
5. **Mutable product pages:** the present DeepMind Cyber and Fairwind pages emphasize Gemini 4 Argon, so their current Argon results/specifications are not evidence about 3.8 Cyber [S7, S8].
6. **Specification disagreement:** BenchLM's context field is “Coming soon”; the exact official model reference provides the concrete limit and takes precedence. CloudPrice corroborates modalities and capacity but contains a batch-pricing entry despite official batch non-support, reducing confidence in unverified rate details [S1, S4, S5].

### Normalized scores (1–100)

- **Tool use: 75/100.** Externally documented Antigravity audit-and-patch performance demonstrates useful agent execution, but hosted function-calling restrictions and missing broad tool benchmarks substantially cap the score [S1, S3].
- **Reasoning: 75/100.** Provisional interpretation of multi-step vulnerability diagnosis and verified patching; general reasoning/knowledge tests remain absent, so no base-Flash frontier score is inherited [S2, S3].
- **Context window: 95/100.** Exact Cyber model documentation verifies 1,048,576 tokens; no measured high-window retrieval justifies a perfect score [S1].
- **Multimodal: 90/100.** Official image, audio, video and PDF inputs reach the methodology's broad-input tier; text-only output and absent accuracy evaluations cap it [S1].
- **Coding: 85/100.** Strong externally evaluated security patching supports substantial coding competence, capped below general frontier coding because coverage is specialized and broader benchmarks are unverified [S3].
- **Cost efficiency: 85/100.** Provisional secondary $0.75/$3.75 standard pricing suggests good token value; $3.64 per benchmark rollout, allowlisted access and rate-card uncertainty temper the assessment [S3, S5].
- **Overall Score: 84/100.** Half-up mean of (75 + 75 + 95 + 90 + 85) / 5 = 84. Evidence-limited general comparison, with strongest support for defensive code auditing; Cost excluded.

### Research trail and sources

Three successful distinct DuckDuckGo searches: `Gemini 3.8 Flash Cyber context pricing`; `Gemini 3.8 Flash Cyber CyberGym CWE independent benchmark`; `site:docs.cloud.google.com Gemini 3.8 Flash Cyber modalities`. Additional exact-name searches encountered DuckDuckGo challenges, Google JavaScript gating, Brave 429 and irrelevant Bing results; those failures were not treated as proof of absent evidence. The linked evaluation PDF returned binary data rather than readable content and was not cited as fully read.

- [S1 — Google Cyber-specific model reference](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash-cyber)
- [S2 — Google September 2 launch](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
- [S3 — Collinear CWE-Bench owner leaderboard and methodology](https://cwe-bench.com/)
- [S4 — BenchLM Cyber evidence inventory](https://benchlm.ai/models/gemini-3-8-flash-cyber)
- [S5 — CloudPrice Cyber-specific pricing/specifications](https://cloudprice.net/models/google-gemini-3-8-flash-cyber)
- [S6 — DataCamp launch review](https://www.datacamp.com/blog/gemini-3-8-flash-cyber)
- [S7 — Current DeepMind Cyber page](https://deepmind.google/models/gemini/cyber/)
- [S8 — Current Fairwind program page](https://deepmind.google/fairwind-program/)

---

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra)** — 2026-10-19
- Method: Independent public-web research, exact-ID official documentation, external benchmark-owner verification and critical comparison of reviews/aggregators. Own excluded twin consulted only after evidence gathering and drafting for the required new-evidence comparison. Scores are normalized interpretations, not official vendor scores or tests run by this reporter.
