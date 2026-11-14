- Source: OpenAI/GPT-5.1
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's 2025-11-13 conversational-intelligence release with Instant / Thinking / Auto routing, the first OpenAI model with adaptive reasoning on the Instant tier. A distinct model; GPT-5.1-Codex-Max is a separate variant and GPT-5.2 is its successor.
- **Provider / access:** ChatGPT (paid tiers first), API; integrated into Perplexity AI search on 2025-11-18. **Retired from ChatGPT on 2026-03-11** (kept three months in the "legacy models" menu after GPT-5.2 launched).
- **Release / knowledge:** 2025-11-13; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.1` family ID as cited; `GPT-5.1 Instant`, `GPT-5.1 Thinking`, `Auto` are routing modes. No free Zen ID verified.
- **Context window:** **400,000 tokens** per a third-party Model Field Guide; no vendor-verified figure in the retrieved Baike excerpt.
- **Modalities:** text in, text out; **video and audio files supported as separate multimodal uploads** (not a unified omni stream); fuzzy-instruction understanding, adaptive reasoning, smart query routing, faster simple-task responses (~2x vs the prior Thinking tier). No verified image input or non-text output.
- **Pricing (as of 2026-11-14):** **$1.25 / 1M input, $10 / 1M output** (third-party Model Field Guide; launch coverage says "same price as GPT-5") — labelled third-party, no vendor rate card fetched.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Adaptive-reasoning router that allocates queries between Instant and Thinking.

### Raw benchmarks found

Agent / tool use:

- CL-bench task resolution (GPT-5.1 High): **23.7%**
- Auto routing automatically assigns queries to the most suitable model; ~**2x** faster responses on simple tasks vs the previous Thinking tier
- LMArena (2025-12-23): Baidu ERNIE 5.0 surpassed GPT-5.1 (directional ranking, no Elo published in the retrieved excerpt)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Adaptive reasoning judges question complexity and adjusts response strategy on the Instant tier (qualitative)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- No coding benchmark published for GPT-5.1 itself in the retrieved excerpt; the separate GPT-5.1-Codex-Max variant introduced "Compaction" for near-limit context windows — lineage only, not a GPT-5.1 score
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 400K third-party-reported window; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 76/100.** Smart Auto routing, ~2x faster simple-task responses and third-party Perplexity integration; capped by a low 23.7% CL-bench and no scored agent harness.
- **Reasoning: 78/100.** First OpenAI adaptive-reasoning Instant tier with separate Thinking mode; capped by no published numeric reasoning benchmark for this exact ID and by ERNIE 5.0 surpassing it on LMArena.
- **Context window: 80/100.** A 400K third-party-reported window with Compaction on the derived Codex variant; capped by no vendor-verified figure and no retrieval benchmark.
- **Multimodal: 80/100.** Video and audio file inputs supported (separately uploaded); capped by no unified omni stream, text-only output, no verified image input, and no multimodal benchmark.
- **Coding: 76/100.** General coding ability inherited in the GPT-5 line with a dedicated Codex variant; capped by zero published coding benchmark scores for this exact ID.
- **Cost efficiency: 72/100.** $1.25/$10 per 1M (third-party) with adaptive reasoning saving compute on easy queries; capped by retirement on 2026-03-11 and no vendor rate card. Excluded from Overall.
- **Overall Score: 78/100.** Half-up mean of 76, 78, 80, 80, 76 = 78.0 → 78. Best fit: historical/legacy conversational workloads; retired from ChatGPT, so no production use is recommended.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.1 article retrieved via public web search excerpt (release, Instant/Thinking/Auto architecture, CL-bench 23.7%, modalities, Perplexity integration, retirement date), plus a third-party Model Field Guide for the 400K context and $1.25/$10 pricing — explicitly labelled third-party. GPT-5.1-Codex-Max's Compaction is treated as a separate variant's feature, not a GPT-5.1 score. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [GPT-5.1 — 百度百科 (retrieved via search excerpt; release, CL-bench, modes, retirement)](https://baike.baidu.com/item/GPT-5.1/66989015)
  - [GPT-5.1 价格、参数与上下文 — Model Field Guide (third-party specs)](https://www.airedirector.com/model/gpt-5.1)
