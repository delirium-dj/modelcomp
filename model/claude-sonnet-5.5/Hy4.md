- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's mid-market Claude 5.5-series model (2026-09-29), the second 5.5 release after Opus 5.5. Positioned as a low-cost complement to Opus 5.5 for well-scoped daily tasks, bug fixing and document/slide/spreadsheet creation — yet it beats Opus 5.5 on several agentic coding tests. A distinct model, not an alias.
- **Provider / access:** Claude platform, AWS, Google Cloud, Microsoft Azure; model ID `claude-sonnet-5-5`. Chat Completions-style Claude API. Available on the claude.ai free tier per one third-party evaluation page.
- **Release / knowledge:** 2026-09-29 (some reports 2026-09-28); knowledge cutoff: no verified public score found.
- **IDs:** `claude-sonnet-5-5`. No free Zen ID verified.
- **Context window:** 1,000,000 tokens for the Claude 5 series; no Sonnet 5.5-specific input/output split verified this pass — no verified public score found for the exact split.
- **Modalities:** text and image in, text out; computer use (first Sonnet to beat Pokémon Red from screenshots), chart understanding, code generation; extended reasoning with **five** effort levels (Low→Max); native tool use with batched tool calls. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$2 / 1M input, $10 / 1M output, $0.20 / 1M cache reads** — same as Sonnet 5 and about half of Opus 5.5. Vendor claims up to 30% lower cost for the same task via fewer tokens; a third-party page notes Opus 5.5's full-task cost is only ~10% higher despite 2x unit price because it outputs fewer tokens.
- **Architecture:** Proprietary, closed weights; first Sonnet with a reasoning-extraction-prevention safety classifier and preserved/signed thinking blocks bound to the originating account; high-risk cyber requests fall back to Sonnet 5 (server-side auto-fallback in beta, developer opt-in). Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** — above Opus 5.5's 66.4% (Sonnet 5 was 10.3%)
- OSWorld 2.1: **80.1%**, up from Sonnet 5's 57.0%; a separate third-party page gives OSWorld-2.1 offline subset **83.9%** (best in Google's Hydrogen comparison table)
- GDPval-AA v2.1: **1844 Elo**, just 2 below Opus 5.5's 1846; a separate page gives AA-Briefcase **1823 Elo** (Opus 5.5 1807)
- AutomationBench-AA: **72** (Opus 5.5 70) per a third-party evaluation page; **71.8%** in Google's Hydrogen table
- Agents' Last Exam v1.1: **60.4%** in Google's Hydrogen table (Hydrogen 71.6%, GPT-6.1 Terra 69.8%)
- Vending-Bench 2 bank balance: **$11,165** in Google's Hydrogen table
- CursorBench 4.0: **55.5%** (Sonnet 5 34.1%)
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis intelligence score: reported **higher than GPT-6 Astra and Claude Fable 5.1** (no exact number published in the retrieved pages)
- HLE-Diamond: **53.3%** in Google's Hydrogen table (Hydrogen 58.8%, GPT-6.1 Terra 47.3%)
- Terminal-Bench 4.1 (cheating-adjusted): **63.9%** — best in Google's Hydrogen table (Hydrogen 57.0%)
- GPQA Diamond / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Terminal-Bench 4.0 **70.6%** and CursorBench 4.0 **55.5%** as above; Terminal-Bench 4.1 **63.9%**
- SWE-sweep: **3.1%** in Google's Hydrogen table (Hydrogen 13.5%, GPT-6.1 Terra 5.8%)
- Terminal-Bench-Science 0.1: **59.9%** — best in Google's Hydrogen table (Hydrogen 51.4%, GPT-6.1 Terra 58.3%)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Chartography (no tools): **61.6%**, up from Sonnet 5's 15.6% (**61.6%** also in Google's Hydrogen table)
- MKA Climb WSR accuracy: **52.0%** in Google's Hydrogen table
- GraphWalks / MRCR / RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 94/100.** Beats the flagship on Terminal-Bench 4.0 (70.6% vs 66.4%), near-ties GDPval-AA (1844 vs 1846), and posts 80.1–83.9% OSWorld-2.1; capped by a modest Vending-Bench 2 ($11,165) and Agents' Last Exam (60.4%).
- **Reasoning: 92/100.** AA score above GPT-6 Astra and Fable 5.1 plus best-in-table Terminal-Bench 4.1 (63.9%) and Terminal-Bench-Science (59.9%); capped by a mid-pack HLE-Diamond 53.3% and no published exact AA index number.
- **Context window: 91/100.** Claude 5-class 1M context with five effort levels and token-efficient batched tool calls; capped by no verified Sonnet 5.5-specific window or long-context retrieval measurement.
- **Multimodal: 87/100.** A near-4x Chartography gain (15.6%→61.6%) and screenshot-based computer use; capped by text-only output, no verified audio/video input, and no multimodal-output capability.
- **Coding: 94/100.** 70.6% Terminal-Bench 4.0 (above Opus 5.5), 63.9% Terminal-Bench 4.1 and 55.5% CursorBench 4.0; capped by a low SWE-sweep 3.1% and no SWE-bench Verified figure.
- **Cost efficiency: 88/100.** $2/$10 per 1M is half the flagship price, with a free claude.ai tier and up to 30% lower same-task cost — the strongest value proposition in the 5.5 family. Excluded from Overall.
- **Overall Score: 92/100.** Half-up mean of 94, 92, 91, 87, 94 = 91.6 → 92. Best fit: high-volume daily agentic coding and routine computer-use workflows where near-flagship quality at half the price wins.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Sonnet 5.5 article (release, pricing, safety, Terminal-Bench/OSWorld/GDPval/CursorBench/Chartography), the Baidu Baike Claude 5 series article, and Google DeepMind's official Gemini 4 Hydrogen benchmark table (which independently scores Sonnet 5.5). Third-party evaluation-page figures are labelled as such; conflicting harness versions are reported separately rather than merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Sonnet 5.5 — 百度百科 (release, pricing, Terminal-Bench 4.0, OSWorld 2.1, GDPval, Chartography)](https://baike.baidu.com/item/Sonnet%205.5/69205696)
  - [Claude 5系列模型 — 百度百科 (5.5 series benchmarks, pricing, safety)](https://baike.baidu.com/item/Claude%205%E7%B3%BB%E5%88%97%E6%A8%A1%E5%9E%8B/68556432)
  - [Gemini — Google DeepMind (official Gemini 4 Hydrogen table incl. Claude Sonnet 5.5)](https://deepmind.google/models/gemini/nano/)
