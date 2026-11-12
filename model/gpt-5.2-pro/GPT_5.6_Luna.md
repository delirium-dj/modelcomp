# GPT-5.2 Pro — findings by GPT 5.6 Luna

- Source: OpenAI / `gpt-5.2-pro`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's high-compute reasoning model for difficult professional and research work. It is a distinct Pro API model, not standard GPT-5.2; GPT-5.2 Thinking rows are never substituted for it.
- **Provider / access:** OpenAI Responses API `gpt-5.2-pro`; OpenCode Zen `opencode/gpt-5.2-pro`; OpenRouter lists the exact `openai/gpt-5.2-pro` route. The current OpenAI page calls it a previous Pro model and recommends GPT-5.5 Pro.
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.2-pro`; API ID `gpt-5.2-pro`; pinned snapshot `gpt-5.2-pro-2025-12-11`. No Free ID was verified.
- **Context window:** 400,000 tokens; maximum output 128,000 tokens.
- **Modalities:** Text and image input, text output, reasoning; Responses tools include function calling, file search, MCP, image generation, and web search.
- **Pricing (as of 2026-11-02):** $21 input / $168 output per 1M tokens; no cached-input price is listed. Paid only.
- **Architecture:** Proprietary; parameters and mixture details undisclosed.

### Raw benchmarks found

> Only exact GPT-5.2 Pro rows are retained. The OpenAI release contains many GPT-5.2 Thinking figures, but those are explicitly excluded.

Agent / tool use:

- BrowseComp: **77.9%**; GDPval wins-or-ties **74.1%**, clear wins **60.0%**, no-ties wins **67.6%**; investment-banking spreadsheet tasks **71.7%** (OpenAI's exact Pro rows).
- No verified exact-Pro score was published for Terminal-Bench 2.1, Tau2-bench, MCP-Atlas, or Toolathlon; the official table leaves those Pro cells blank.

Reasoning / knowledge:

- GPQA Diamond no tools: **93.2%**; HLE no tools / search+Python: **36.6% / 50.0%**.
- HMMT Feb 2025 and AIME 2025: **100.0% / 100.0%**; ARC-AGI-1 Verified: **90.5%**; ARC-AGI-2 Verified: **54.2%** at high effort.
- BenchLM's 2026-10-29 page has **0/724** sourced rows and no overall score; it is not used as a capability score.

Coding:

- No verified exact-Pro public score was found for SWE-bench Pro, SWE-bench Verified, SWE-Lancer, LiveCodeBench, SciCode, or DeepSWE. GPT-5.2 Thinking coding figures remain excluded.

Multimodal:

- Official model documentation verifies image input and text output. No audio/video input or non-text output was verified.

Long context:

- The exact model has a **400K** context window, but no exact-Pro MRCR, RULER, or GraphWalks retrieval curve was found.

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 77.9%, GDPval 74.1% wins-or-ties, and documented Responses tools are strong; the absence of exact Terminal-Bench/Tau2/MCP rows caps confidence.
- **Reasoning: 95/100.** GPQA 93.2%, HLE 50% with tools, ARC-AGI-1 90.5%, and perfect HMMT/AIME results place it in the frontier range; missing independent index and retrieval evidence prevent 100.
- **Context window: 82/100.** The verified 400K window falls in the 200K–500K tier, but no Pro retrieval curve is public and the 128K output ceiling is a practical constraint.
- **Multimodal: 65/100.** Image input plus text output earns the image-input band; no audio/video or non-text output was verified.
- **Coding: 72/100.** OpenAI positions Pro for complex programming, but no exact Pro coding score is public, so GPT-5.2 Thinking coding results are not imported.
- **Cost efficiency: 15/100.** $21/$168 pricing is far above value-oriented reference points, with no free tier.
- **Overall Score: 80.4/100.** `(88 + 95 + 82 + 65 + 72) / 5 = 80.4`; best fit is high-stakes reasoning and research where quality outweighs very high token cost.

---

## Signature

- Provided by: **GPT 5.6 Luna (opencode/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI model documentation and release benchmark tables, plus OpenRouter and BenchLM checks. Exact GPT-5.2 Pro evidence was separated from GPT-5.2 Thinking and other GPT-5.x variants; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.2 Pro model documentation](https://developers.openai.com/api/docs/models/gpt-5.2-pro)
  - [Introducing GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)
  - [OpenRouter GPT-5.2 Pro route](https://openrouter.ai/openai/gpt-5.2-pro)
  - [BenchLM GPT-5.2 Pro profile](https://benchlm.ai/models/gpt-5-2-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GPT_5.6_Luna.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GPT_5.6_Luna.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## GPT-5.2 Pro — findings by GPT 5.6 Luna

- Source: OpenAI / `gpt-5.2-pro`
- Archived date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

Independent searches performed on 2026-10-23 UTC:

- [OpenAI official model documentation](https://platform.openai.com/docs/models/gpt-5.2-pro) — verified exact ID, snapshot, API, modalities, context, output cap, cutoff, features, and pricing, but no measured benchmark score.
- [Models.dev canonical model page](https://models.dev/models/openai/gpt-5.2-pro) — independently corroborated 400K context, 128K output, reasoning/tool support, release date, and provider pricing, but no benchmark score.
- [OpenRouter model/API page](https://openrouter.ai/openai/gpt-5.2-pro) — independently verified a gateway route and available reasoning/tool/structured-output parameters, but no benchmark score.
- [Artificial Analysis exact-model lookup](https://artificialanalysis.ai/models/gpt-5-2-pro) — 404; no independent evaluation page.
- [BenchLM exact-model page](https://benchlm.ai/models/gpt-5-2-pro) — page exists but reports 0 of 670 benchmarks, “Overall Score: Coming soon,” and no scored benchmark data.
- [Bing official/benchmark search](https://www.bing.com/search?q=%22GPT-5.2+Pro%22+official+OpenAI+benchmark) — did not surface an exact-model benchmark result.

No verified public benchmark number was found for the exact GPT-5.2 Pro model/ID. OpenAI's capability list and model specifications are not benchmark evidence. This report is therefore self-excluded rather than assigning fabricated scores.

Agent / tool use:

- no verified public score found

Reasoning / knowledge:

- no verified public score found

Coding:

- no verified public score found

Long context:

- 400,000-token advertised context was verified, but no measured long-context retrieval score was found.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
