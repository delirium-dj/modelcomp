# Claude Opus 4.8 — findings by GPT 6 Astra

- Source: Anthropic / Claude Opus 4.8
- Date: 2026-10-09 (UTC); user-authorized refresh of the 2026-10-03 report.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Claude Opus 4.8.
- **Short description:** Hybrid reasoning model for coding, professional work and sustained agents.
- **Provider / access:** Claude, Claude Code, Anthropic Messages API, Bedrock, Vertex AI and Azure AI Foundry.
- **Release / knowledge:** May 28, 2026; January 2026 knowledge cutoff. [Publisher transparency summary](https://www.anthropic.com/transparency).
- **IDs:** `claude-opus-4-8`; no verified Free Zen ID.
- **Context window:** 1M tokens; 128K maximum output, or 300K on Batch API beta. [Current specification](https://platform.claude.com/docs/en/models/opus-4-8/overview).
- **Modalities:** Text/image/PDF input, text output; reasoning, tools and computer/browser use. Voice dictation and TTS are product features, not proof of native audio. Exact JSON contract unverified.
- **Pricing (as of 2026-10-03):** Standard $5 input / $25 output per million; fast mode $10/$50. [Launch](https://www.anthropic.com/news/claude-opus-4-8). AA lists $0.50 cache hits.
- **Architecture:** Proprietary; parameter counts undisclosed.

### Original benchmark snapshot (2026-10-03)

The AA numbers below are preserved for comparison. The linked pages were reopened on October 9, but their retrieved text did not expose these numeric results, so they are **not freshly reverified**. Missing-data statements in this historical section describe the original search; the refresh below supersedes them where new evidence is available.

Agent / tool use:

- AA Max configuration: GDPval-AA v2.1 **1456 Elo**, AA-Briefcase v1.1 **1321**, AutomationBench-AA **46%**, Terminal-Bench 4.0 **22%**. [AA comparison snapshot](https://artificialanalysis.ai/models/comparisons/claude-opus-4-8-vs-gpt-5-3-codex). Elo varies across refreshed pages; this report uses one snapshot.
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public numeric score found in reviewed source text.

Reasoning / knowledge:

- AA Intelligence Index v4.3.2 **42**, HLE **49%**, CritPt **21%**, GDP.pdf **23%**, AA-Omniscience **29 index points**. Same AA snapshot; the index is not accuracy.
- GPQA, MLCR, BenchLM and Omniscience accuracy/hallucination rate: no verified public score found in reviewed sources.

Coding:

- SciCode **54%**, same [AA evaluation](https://artificialanalysis.ai/models/comparisons/claude-opus-4-8-vs-gpt-5-3-codex).
- SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench and DeepSWE: no verified public numeric score found in reviewed text.

Long context:

- AA-LCR v1.1 **78%**; no verified near-perfect retrieval at 512K or more.

### Fresh evidence checked October 9

- MCP Atlas: **82.20 ± 2.40**, max effort. [Scale MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas)
- SWE Atlas Codebase QnA: **57.26 ± 4.93**, Claude Code, xhigh. This measures codebase question answering, not patch resolution. [Scale QnA](https://labs.scale.com/leaderboard/sweatlas-qna)
- Vibe Code Bench v1.1: **82.72%**, OpenHands, **$26.88/test**. The leaderboard is dated October 7; these are harness-dependent application-building results, not Vibe1-100. [Vals AI](https://www.vals.ai/benchmarks/vibe-code)
- Vals also lists Claude Code at **77.48%**, **$6.86/test** for Opus 4.8. Keep this separate from the OpenHands row; neither score nor task cost transfers across harnesses. [Vals AI](https://www.vals.ai/benchmarks/vibe-code)

Specifications reconfirmed: active legacy status, 1M context, 128K output, 300K output for Batch API beta, and $5 input/$25 output/$0.50 cache-read per million tokens. Cache writes cost $6.25 (5 minutes) or $10 (1 hour); batch input/output receive a 50% discount. [Current model specification](https://platform.claude.com/docs/en/models/opus-4-8/overview)

PDF processing is documented for all active models, including active legacy models. This establishes PDF input support in addition to images; it does not establish native audio/video support. [Anthropic PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support)

### Comparison with October 3 and remaining gaps

The output limit is newly verified, and the new MCP, codebase-QnA and app-building evidence fills gaps in the original report. Tool use rises from 81 to 84 and Coding from 85 to 89 on this broader evidence; the historical weak terminal result still limits confidence. Multimodal rises from 70 to 80 under the project PDF-input tier. Reasoning 90, Context 95 and Cost 50 stay unchanged. Overall changes from 84 to 88. The old fast-mode $10/$50 claim was not reconfirmed in the current model overview and is retained only as historical launch pricing.

These rating changes reflect better evidence coverage, not measured improvement between October 3 and October 9. Different effort levels, harnesses and benchmark versions are not pooled. Exact-ID GPQA, hallucination rate, LiveCodeBench, DeepSWE and full-window retrieval remain unverified in this refresh; no values are inferred from related models. The discovered Opus 4.8 system-card PDF could not be retrieved, so its search snippets were not used as benchmark evidence.

### Normalized scores (1–100)

- **Tool use: 84/100.** Newly verified MCP Atlas broadens tool evidence; the historical terminal result still indicates limits.
- **Reasoning: 90/100.** HLE and CritPt show strong reasoning; imperfect factual reliability caps the score.
- **Context window: 95/100.** Million-token context meets the top size tier without proving perfect retrieval.
- **Multimodal: 80/100.** Verified image and PDF input meet the PDF-input tier; native audio/video and non-text output remain unverified.
- **Coding: 89/100.** Codebase QnA and app-building results broaden the historical SciCode evidence; terminal performance and harness differences constrain confidence.
- **Cost efficiency: 50/100.** $5/$25 remains expensive relative to capable current alternatives; caching can reduce repeated-input cost.
- **Overall Score: 88/100.** Half-up mean (84 + 90 + 95 + 80 + 89) / 5 = 87.6, rounded to 88; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research 2026-10-03.
- Method: Independent public web research; normalized scores are interpretations, not vendor scores.
- Future sources: Add a separate signed findings file alongside this report.
