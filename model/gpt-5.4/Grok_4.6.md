# GPT-5.4 — findings by Grok 4.6

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 mainline reasoning model for coding and professional work, with native computer use and a 1.05M context window. Distinct from GPT-5.4 Pro. Artificial Analysis now marks the xhigh API page deprecated in favor of GPT-5.5.
- **Provider / access:** OpenAI API / Responses + Chat Completions family; model `gpt-5.4`, default snapshot `gpt-5.4-2026-03-05`. reasoning.effort: none (default), low, medium, high, xhigh. Also ChatGPT Thinking for paid seats (legacy 5.2 Thinking retirement noted as 2026-06-05 in the launch post).
- **Release / knowledge:** Launch post "Introducing GPT-5.4"; snapshot date 2026-03-05. Knowledge cutoff **2025-08-31** (OpenAI model docs).
- **IDs:** `gpt-5.4`; `openai/gpt-5.4` on gateways. Pro is `gpt-5.4-pro` (separate folder). No OpenCode Zen Free ID found.
- **Context window:** 1,050,000 tokens; 128,000 max output (OpenAI docs). Prompts >272K input bill 2× input and 1.5× output for the full session (standard/batch/flex). Codex has experimental 1M via `model_context_window`.
- **Modalities:** Text and image in; text out; reasoning tokens; computer use; tool search. No audio/video I/O on the model card.
- **Pricing (as of 2026-10-20):** $2.50 / $0.25 cached / $15.00 per 1M (OpenAI docs). Batch/Flex half; Priority 2×; regional processing +10%. Long-context (>272K) multiplier as above. Pro is $30/$180 — not this SKU.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **75.0%** (OpenAI launch table)
- Toolathlon: **54.6%** (OpenAI)
- BrowseComp: **82.7%** (OpenAI)
- GDPval (wins or ties): **83.0%** (OpenAI; not AA Elo)
- GDPval-AA v2.1: **1307** Elo (ARMES compilation)
- TAU-3 Banking: **39.6%** (ARMES)
- Terminal-Bench 2.0: **75.1%** (OpenAI)
- Terminal-Bench 2.1: **78.3%** (Artificial Analysis, OpenTools/ARMES)
- Terminal-Bench 4.0: **57.6%** (ARMES)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (OpenAI); **92.0%** (AA / ARMES)
- HLE (no tools): **39.8%** (OpenAI); **43.7%** (ARMES AA-style row)
- HLE (with tools): **52.1%** (OpenAI)
- Artificial Analysis Intelligence Index: **39*** estimated (AA gpt-5-4 xhigh page; model marked deprecated there)
- CritPt: **23.4%** (ARMES)
- AA-LCR v1.1: **82.0%** (ARMES)
- AA-Omniscience: **5.8** (ARMES; index scale)
- FrontierMath T1–3 / T4: **47.6% / 27.1%** (OpenAI)
- MMMU-Pro: **81.2%** (OpenAI)

Coding:

- SWE-Bench Pro (Public): **57.7%** (OpenAI)
- Terminal-Bench 2.0 / 2.1: see tool-use row
- SWE-bench (unspecified harness): **84%** (ARMES — harness not named; treat as secondary)
- AA Coding Index: **71.1** (ARMES)
- LiveCodeBench / SciCode / DeepSWE: **no verified public score found** on the launch tables

Long context:

- 1.05M window; AA-LCR **82.0%**. **no ≥98% MRCR at 512K+ found**

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 75% and AA TB 2.1 78.3% are solid; Toolathlon 54.6% and Tau3 Banking 39.6% are mid; GDPval-AA Elo 1307 is below the ~1750 frontier ref. Capped by those mid agent numbers and TB 2.0 not 2.1 on the vendor card.
- **Reasoning: 86/100.** GPQA 92.8% is frontier; HLE no-tools 39.8% sits on the 40% line. Capped by AA Index 39 (mid, and estimated/deprecated page) and CritPt 23.4%.
- **Context window: 96/100.** 1.05M / 128K out is the ≥1M tier. Not 100: LCR 82% is not ≥98% at 512K+, and >272K is surcharge-gated.
- **Multimodal: 65/100.** Image-in / text-out is the 60–70 band. Computer-use is agentic, not extra I/O modalities.
- **Coding: 82/100.** SWE-Pro 57.7% is mid-high; TB 2.0 75.1% / AA TB 2.1 78.3% are below the 85% TB coding frontier. Capped by no DeepSWE/SciCode and SWE-Pro <60.
- **Cost efficiency: 62/100.** $2.50/$15 sits between ~$1.25/$4.25 (88) and ~$3/$15 (60), closer to the expensive anchor. Long-context 2×/1.5× surcharge is a further caveats. No $0 tier.
- **Overall Score: 82/100.** Mean of 82 + 86 + 96 + 65 + 82 = 82.2 → 82 half-up. Best fit: paid generalist agents with computer use on the 5.4 snapshot; prefer later GPT SKUs if AA's deprecation note matches your gateway.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (OpenAI GPT-5.4 docs and launch post, Artificial Analysis gpt-5-4 page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
