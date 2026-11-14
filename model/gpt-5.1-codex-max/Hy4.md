- Source: OpenAI/GPT-5.1-Codex-Max
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's November 2025 agentic programming model led by Noam Brown, introducing **compaction** (context compression) for continuous work across millions of tokens and >24-hour sessions. First OpenAI coding model trained and optimised for Windows. A distinct model; `gpt-5.1-codex`, `gpt-5.2-codex` and `gpt-5.3-codex` are separate.
- **Provider / access:** Default model in the Codex integrated surface, API fully opened 2025-12-05; integrated into Cursor, GitHub Copilot and Linear.
- **Release / knowledge:** 2025-11 (API 2025-12-05); knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.1-codex-max`. No free Zen ID verified.
- **Context window:** **>1,000,000 tokens effective via compaction** (continuous work across millions of tokens); exact native window not published in the retrieved pages — no verified public score found for an exact figure.
- **Modalities:** text and code in, text/code out; long-running project-level software engineering, code completion, Windows development environments; medium / xhigh reasoning effort. No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** same as standard GPT-5 (**$1.25 / 1M input, $10 / 1M output** per the official GPT-5 developer page, already fetched) — lineage rate card, not a Codex-Max-specific quote.
- **Architecture:** Proprietary, closed weights; built on GPT-5 with the compaction mechanism retaining key state near context limits; ~30% fewer thinking tokens than the predecessor and 27–42% faster execution.

### Raw benchmarks found

Agent / tool use:

- Internal test: continuous autonomous work **>24 hours** across multiple context windows (qualitative)
- Thinking-token use **−30%** vs the predecessor; execution speed **+27–42%** (relative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Verified: **77.9%**
- Terminal-Bench 2.0: **58.1%**
- SWE-Lancer IC SWE: **79.9%** (secondary Tencent Cloud comparison, labelled)
- SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Compaction enables work across millions of tokens with >24-hour sessions; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** >24-hour autonomous sessions, compaction across millions of tokens, −30% thinking tokens, +27–42% speed and three major tool integrations; capped by no scored agent harness.
- **Reasoning: 83/100.** Two-tier reasoning effort and efficient thinking-token use; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 93/100.** Compaction-based multi-million-token continuous work — a genuinely differentiated mechanism for long projects; capped by no verified native window and no retrieval benchmark.
- **Multimodal: 75/100.** Scored conservatively: the retrieved sources document a text/code agent only, with no verified image/audio/video input.
- **Coding: 90/100.** SWE-bench Verified 77.9%, Terminal-Bench 2.0 58.1% and SWE-Lancer IC SWE 79.9% (secondary), plus Windows-specific optimisation; capped by no LiveCodeBench/SciCode figure.
- **Cost efficiency: 88/100.** Standard GPT-5 pricing ($1.25/$10 lineage), −30% thinking tokens and faster execution; excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 88, 83, 93, 75, 90 = 85.8 → 86. Best fit: multi-day, project-level agentic software engineering, especially on Windows; superseded by GPT-5.2/5.3-Codex.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.1-Codex-Max article retrieved via public web search excerpt (release, compaction, >24h sessions, SWE-bench Verified 77.9%, Terminal-Bench 2.0 58.1%, −30% tokens, +27–42% speed, Windows optimisation, integrations), plus secondary launch coverage (百家号 / Tencent Cloud) for the SWE-Lancer IC SWE 79.9% and context details — labelled secondary. Pricing is the standard GPT-5 rate card from OpenAI's official developer page (already fetched), explicitly labelled lineage. GPT-5.1-Codex / 5.2-Codex / 5.3-Codex are separate models, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [GPT-5.1-Codex-Max — 百度百科 (retrieved via search excerpt; compaction, benchmarks, specs)](https://baike.baidu.com/item/GPT-5.1-Codex-Max/67466869)
  - [Introducing GPT-5 for developers — OpenAI (lineage pricing, already fetched)](https://openai.com/index/introducing-gpt-5-for-developers/)
