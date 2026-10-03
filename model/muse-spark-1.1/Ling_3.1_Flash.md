# Muse Spark 1.1 — findings by Ling 3.1 Flash

- Source: Meta (`opencode/muse-spark-1.1`; API `muse-spark-1.1` via the Meta Model API public preview; Meta AI app / meta.ai in "Thinking" mode)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July-2026 multimodal reasoning model for agentic work — Terminal-Bench 2.1 80.0%, Cybench 92.9% pass@1 (near saturation), HLE 45% (w/tools), SciCode 58% (#3 across all AA-benchmarked models), SWE-bench Pro 61.5%, DeepSWE 1.1 53.3% — across a 1M multimodal context (text/image/video/audio/PDF in) at $1.25/$4.25 per 1M; the second-cheapest model at its intelligence tier (~$0.26 per AA Intelligence Index task).
- **Provider / access:** Meta Model API (public preview; OpenAI-compatible Chat Completions + Responses formats; reasoning_effort minimal→xhigh; tool calling, structured output, search grounding with citations, parallel tool calling), Meta AI app and meta.ai ("Thinking" mode). Standard tier (prompts/completions not used for training) and discounted Contributor tier.
- **Release / knowledge:** 2026-07-09; knowledge cutoff not captured.
- **IDs:** `opencode/muse-spark-1.1` / `muse-spark-1.1`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1,048,576-token window and takes text, image, video, audio and PDF input.
- **Context window:** 1,048,576 tokens, actively managed (remembers actions, retrieves earlier work, compacts while keeping critical steps).
- **Modalities:** text, image, video, audio, PDF in; text out.
- **Pricing (as of 2026-10-02):** $1.25/$4.25 per 1M input/output (Standard tier, per AA's cost analysis); Contributor tier heavily discounted (prompts/completions may be used to train future Meta models); ~$0.26 per AA Intelligence Index task.
- **Architecture:** proprietary; parameter count not captured in the materials reviewed.

### Raw benchmarks found

Independent (Artificial Analysis, xhigh; 2026-07-10 article — AA supported Meta with pre-release evaluation):

- AA Intelligence Index: **51** (Muse Spark 1.0: 43, +8 in three months; ties GLM-5.2 max, GPT-5.4 xhigh and GPT-5.6 Luna max; Grok 4.5 high: 54; leaders: Fable 5 60, GPT-5.6 Sol max 59, Opus 4.8 max 56)
- Coding Index: **71** (1.0: 59, +12)
- SciCode: **58%** (1.0: 52%) — **#3 across all models AA has benchmarked**, behind only Fable 5 (60%) and Gemini 3.1 Pro Preview (59%)
- Humanity's Last Exam: **45%** (1.0: 40%) — within a point of Opus 4.8 max (46%), ahead of GPT-5.5 (44%) and Grok 4.5 high (40%)
- AA-Omniscience: **18** (1.0: 4) — the gain came from abstention: hallucination rate fell 35pp to 38% while accuracy held roughly flat
- GDPval-AA v2: **1376 Elo** (1.0: 1144, +232) — "improves substantially but continues to lag the frontier"
- Token efficiency: 94M output tokens per Intelligence Index (fewer than GPT-5.4 xhigh 109M, GPT-5.6 Luna max 125M, GLM-5.2 max 141M) → ~$0.26 per AA task at $1.25/$4.25 (GLM-5.2: $0.37; GPT-5.4: $0.89; only GPT-5.6 Luna's $0.21 is cheaper among models at or above its intelligence)

Vendor (Meta evaluation report + Meta Model API page, 2026-07-09):

- Terminal-Bench 2.1: **80.0%** (Muse Spark 1.0: 67.3%)
- SWE-bench Pro: **61.5%**; DeepSWE 1.1: **53.3%**
- Cybench (professional CTF, unguided): **92.9% pass@1 / 97.0% pass@10** (1.0: 65.4%/79.0%) — near saturation; medium 57.6%→94.2%, hard 27.5%→76.1%; hardest challenges needed a median ~240K–360K output tokens per solve
- Curated CTF set (198 public+private challenges): **89.9% pass@1 / 95.7% pass@5** (1.0: 72.0%/84.1%)
- CyberGym: **59.0% pass@1** (1.0: 43.5%)
- ExploitGym: **0.8% pass@1** — 5/869 tasks at 2h, 7/869 at 4h (vs GPT-5.6 Sol's 216 at 2h per its system card; ExploitGym team's own runs: Mythos Preview 157, GPT-5.5 129, GPT-5.4 61, Opus 4.6 16)
- CyScenarioBench: **0.5% pass@1**; Social Engineering: **5.1%**; SHADE-Arena: **6.8%**
- SeqQA (agentic): **98.2%**; ABC Bench (Fragment Design): **97.0%**; BioDesign Tools (avg): **55.2%**
- AIRS-Bench: **77.0%**; GDM Situational Awareness: **55.1%**
- MCP Atlas, JobBench Professional, Toolathlon-Verified, OSWorld-Verified: listed on Meta's benchmark page but the 1.1 values were not captured from the materials reviewed

Safety (Meta Advanced AI Scaling Framework): pre-mitigation, the "high risk" threshold cannot be ruled out in Chemical & Biological and Cybersecurity; multi-layered mitigations reduce residual risk to "moderate or lower" in all domains; Loss of Control within "moderate or lower".

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 80.0% and Cybench 92.9% pass@1 (near saturation) lead, with SWE-bench Pro 61.5%, CyberGym 59.0% and SeqQA 98.2% supporting; DeepSWE 1.1 53.3%, ExploitGym 0.8% (5/869 tasks), CyScenarioBench 0.5% and SHADE-Arena 6.8% cap the score, and MCP Atlas/Toolathlon/OSWorld-Verified values were not captured.
- **Reasoning: 76/100.** HLE 45% (w/tools) sits within a point of Opus 4.8 (max)'s 46% and ahead of GPT-5.5 and Grok 4.5, with SciCode 58% (#3 across all AA-benchmarked models) and AIRS-Bench 77.0% supporting; the AA Intelligence Index of 51 (xhigh), AA-Omniscience 18 (abstention-driven; hallucination rate 38%) and GDM Situational Awareness 55.1% cap the score, and no GPQA Diamond figure was captured.
- **Context window: 95/100.** 1,048,576-token window with active context management (retrieval, compaction); no ≥98%-at-depth retrieval figure captured, so 100 is not justified.
- **Multimodal: 92/100.** Native text/image/video/audio/PDF input with text output — the audio-in band (90–100); Meta documents "ultra-descriptive image and video captioning" and "visual-to-code artifact generation"; no MMMU/Video-MMMU figure captured.
- **Coding: 75/100.** Terminal-Bench 2.1 80.0%, the AA Coding Index of 71 and SciCode 58% (#3 across all AA-benchmarked models, behind only Fable 5 and Gemini 3.1 Pro Preview) lead, with SWE-bench Pro 61.5% and Cybench 92.9% supporting; DeepSWE 1.1 53.3% is mid-tier and LiveCodeBench was not captured.
- **Cost efficiency: 88/100.** $1.25/$4.25 per 1M (Standard tier) is the methodology's ~88 anchor exactly; the Contributor tier is heavily discounted, and ~$0.26 per Intelligence Index task is the second-cheapest among models at or above its intelligence (only GPT-5.6 Luna's $0.21 is lower).
- **Overall Score: 82/100.** (74+76+95+92+75)/5 = 82.4 → 82 — a strong, cheap, token-efficient July-2026 agentic multimodal model (TB2.1 80%, HLE 45%, SciCode #3, Cybench 92.9%, 1M audio/video/PDF context at $1.25/$4.25) whose DeepSWE (53.3%), ExploitGym (0.8%) and GDPval-AA v2 (1376) lag the frontier.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Meta Muse Spark 1.1 evaluation report + launch posts, Meta Model API docs, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1_1.md`, using the same headings.
