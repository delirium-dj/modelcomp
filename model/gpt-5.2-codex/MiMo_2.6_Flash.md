# GPT-5.2 Codex — findings by MiMo 2.6 Flash

- Source: OpenAI `gpt-5.2-codex`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex (`gpt-5.2-codex`) — GPT-5.2 further optimized for agentic coding in Codex: long-horizon work via context compaction, large code changes (refactors/migrations), native Windows environments, stronger cybersecurity, and stronger vision for screenshots/diagrams/charts/UI surfaces (OpenAI launch post).
- **Short description:** OpenAI's December-2025 coding specialist — claimed SOTA on SWE-Bench Pro and Terminal-Bench 2.0 at launch; superseded by GPT-5.3-Codex (2026-02-05), which leapfrogged it on Terminal-Bench 2.0 (77.3 vs 64.0) and OSWorld (64.7 vs 38.2).
- **Provider / access:** OpenAI API (`gpt-5.2-codex`), Codex app/CLI, ChatGPT plans with Codex; OpenRouter. Proprietary, no weights.
- **Release / knowledge:** **conflict:** OpenAI's blog index dates "Introducing GPT-5.2-Codex" to **2025-12-18**; llm-stats tracks **2026-01-14** as the release date; both reported. Knowledge cutoff not republished for the Codex variant (family: 2025-08-31).
- **IDs:** `gpt-5.2-codex` (OpenAI API); Kilo Code/OpenRouter `openai/gpt-5.2-codex`.
- **Context window:** 400,000 input / 128,000 max output (llm-stats, Kilo Code family records, OpenAI family docs).
- **Modalities:** text + image in, text out; vision explicitly strengthened for coding-session artifacts (screenshots, technical diagrams, charts, UI surfaces); reasoning effort tiers incl. xhigh.
- **Pricing (as of 2026-10-27):** **$1.75 in / $14.00 out** per 1M, cache read $0.175 (llm-stats; eesel's OpenAI-API-sourced table; same rate card as GPT-5.2 Thinking and as its GPT-5.3-Codex successor's standard tier).
- **Architecture:** proprietary — weights private; no parameter count disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (OpenAI, xhigh): **64.0%** — SOTA at launch (Dec 2025); vs GPT-5.2 62.2, later crushed by GPT-5.3-Codex 77.3 (OpenAI 5.3-Codex appendix table)
- OSWorld-Verified (OpenAI, xhigh): **38.2%** vs GPT-5.2 37.9; GPT-5.3-Codex later 64.7
- SWE-Lancer IC Diamond (OpenAI, xhigh): **76.0%** (vs GPT-5.2 74.6; later 5.3-Codex 81.4)
- Cybersecurity CTF (OpenAI, xhigh): **67.4%** (vs GPT-5.2 67.7; later 5.3-Codex 77.6)
- GDPval: not published for the Codex variant (OpenAI appendix shows "-")
- Windows-environment agent reliability: explicitly improved over GPT-5.1-Codex-Max (launch post; no public metric)

Coding:

- SWE-Bench Pro (public, OpenAI xhigh): **56.4%** — SOTA at launch (vs GPT-5.2 55.6; later 5.3-Codex 56.8). HN cross-check (mohsen1) independently compiled the same 56.4 with SWE-Verified ~80 at launch.
- SWE-bench Verified (Vals AI): **72.40%** (Mini-SWE-agent harness, $0.31/task, rank 55) — **conflict:** Vals' multi-config leaderboard row for "GPT 5.2 Codex" reads 88/68/29/33 across its four displayed columns (different harness configs); both reported, harness variance unreconciled.
- Launch claim: "state-of-the-art on SWE-Bench Pro and Terminal-Bench 2.0" (OpenAI, Dec 2025) — true only for the launch window; contradicted by its own successor's February appendix table.

Reasoning / knowledge:

- No GPQA/HLE/AIME figures published for the Codex variant; general reasoning inherited from GPT-5.2 (family GPQA 92.4 Thinking). No independent index entry (AA/Vals composite) found for `gpt-5.2-codex` specifically.

Long context:

- 400K/128K with **context compaction** for long-horizon sessions (launch post) — a Codex-specific mechanism; no MRCR/RULER figure for the variant.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.0 64.0 and SWE-Lancer IC Diamond 76.0 were SOTA-class at launch, with Windows-agent and compaction improvements — but OSWorld-Verified 38.2 is weak, GDPval is unpublished, and by October 2026 the successor's appendix table shows the whole agentic stack moving on (TB-2.0 64.0 → 77.3).
- **Reasoning: 76/100.** A GPT-5.2 derivative, so family-level reasoning is frontier-for-December (GPQA 92.4 on the Thinking tier), yet OpenAI published zero science/reasoning benchmarks for the Codex variant itself; scored conservatively as a coding specialist without evidence of Pro-tier reasoning.
- **Context window: 80/100.** 400K/128K plus a real long-horizon mechanism (context compaction, explicitly credited for long tasks) beats the bare family window; held below 90 because no retrieval measurement (MRCR/RULER) exists for the variant.
- **Multimodal: 68/100.** Text + image input with explicitly strengthened vision for screenshots, diagrams, charts and UI surfaces — genuinely tuned for coding-session multimodality — but text-only output, no MMMU figure, no audio/video.
- **Coding: 86/100.** Launch SOTA on SWE-Bench Pro (56.4) and Terminal-Bench 2.0 (64.0), Vals Verified 72.40–88 depending on harness, SWE-Lancer 76.0; capped because its own successor GPT-5.3-Codex beat it within two months (SWE-Pro 56.8, TB-2.0 77.3) and CodingAgents.md has since retired its numbers as "one or two generations behind".
- **Cost efficiency: 55/100.** $1.75/$14 with 90%-discount caching ($0.175) is standard mid-frontier pricing — the same rate card as GPT-5.2 Thinking and its successor; neither cheap nor premium.
- **Overall Score: 78/100.** (80 + 76 + 80 + 68 + 86) / 5 = 78.0 → 78 — best fit: December-2025-to-early-2026 agentic coding in Codex/Windows environments at standard frontier pricing; not the pick today — GPT-5.3-Codex dominates the same niche for the same money.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official OpenAI sources first (Introducing GPT-5.2-Codex, GPT-5.3-Codex appendix table with the 5.2-Codex column, API pricing page), then independent benchmark/review sources (Vals AI leaderboards, HN cross-check, llm-stats, eesel, Kilo Code, CodingAgents.md, morphllm); conflicting dates and harness figures are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
