# Seed 2.0 Pro — findings by Claude Opus 4.6

- Source: ByteDance (`seed-2.0-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship general-purpose agent model in the Seed 2.0 family, released February 2026. Designed for long-chain reasoning, complex agentic workflows, and multimodal understanding. Powers the Doubao chatbot and is accessible via the Volcano Engine (Ark) API.
- **Provider / access:** ByteDance Volcano Engine (Ark) API; also available via DeepInfra and other MaaS providers. Chat Completions API.
- **Release / knowledge:** 2026-02-14 release; knowledge cutoff not publicly specified.
- **IDs:** `bytedance/seed-2.0-pro` (no free-tier ID on Zen; paid API only)
- **Context window:** 256 000–272 000 tokens input; max output not separately documented. Verified via llm-stats.com and airank.dev.
- **Modalities:** Text, image, video (including hour-long recordings) in; text out; tool/function calls; multi-step planning; autonomous agent execution.
- **Pricing (as of 2026-02-14):** ~$0.50 / $3.00 per 1M tokens (input / output); cached input ~$0.10/1M. Paid API.
- **Architecture:** Proprietary; parameter count undisclosed. Part of ByteDance's Seed 2.0 foundation model family (Pro/Lite/Mini/Code variants).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **55.8%** (source: evolink.ai benchmark report)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- BrowseComp: **77.3%** (source: apiyi.com, bytedance documentation)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (source: evolink.ai, bytedance documentation)
- AIME 2025: **98.3** (source: evolink.ai)
- AIME 2026: **94.2** (source: evolink.ai)
- MMLU-Pro: **87.0** (source: evolink.ai)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **76.5%** (source: airank.dev, evolink.ai, bytedance documentation)
- LiveCodeBench v6: **87.8%** (source: evolink.ai, bytedance documentation)
- Codeforces: **3020** (source: evolink.ai)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER: no verified public retrieval score found; context window is 256K–272K tokens, well below the 1M+ offered by some competitors.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 at 55.8% is moderate — significantly below frontier models on this benchmark. BrowseComp at 77.3% shows strong web-browsing agent capability. High-performance tool-calling abilities noted in production environments. Capped by Terminal-Bench result and missing Tau-bench / Claw-Eval data.
- **Reasoning: 90/100.** GPQA Diamond at 88.9% is strong PhD-level reasoning. AIME 2025 at 98.3 and AIME 2026 at 94.2 are exceptional competition-math results. MMLU-Pro at 87.0 shows broad knowledge coverage. Capped by no HLE or CritPt scores, and GPQA trails some frontier models (e.g., GPT-5.6 Terra at 92.9%).
- **Context window: 55/100.** 256K–272K token context is significantly below the 1M+ standard of many frontier competitors. No MRCR/RULER retrieval scores available. The smaller context window limits use cases involving very large codebases or long documents.
- **Multimodal: 78/100.** Natively multimodal with text, image, and video input (including hour-long video processing) with text output. VideoMME at 89.5 and MMMU at 85.4 demonstrate strong multimodal understanding. No image/video generation; text-only output. Video support is a differentiator.
- **Coding: 86/100.** SWE-bench Verified at 76.5% is strong. LiveCodeBench v6 at 87.8% is excellent competitive coding. Codeforces rating of 3020 is elite-tier. The combination of practical SWE and algorithmic coding results places this in the upper tier. Capped by no DeepSWE or Vibe Code Bench scores.
- **Cost efficiency: 88/100.** At ~$0.50/$3.00 per 1M tokens, this is very cost-efficient for a flagship-tier model. Cached input at $0.10/1M further reduces costs. Excellent value relative to performance.
- **Overall Score: 77/100.** Mean of (76 + 90 + 55 + 78 + 86) / 5 = 77.0. Excellent reasoning and coding with strong multimodal capabilities, but the limited context window (256K vs. 1M+) significantly holds it back. Best suited for complex reasoning and coding tasks that don't require massive context ingestion.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-25
- Method: public internet research (ByteDance documentation, evolink.ai, airank.dev, apiyi.com, llm-stats.com, DeepInfra); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
