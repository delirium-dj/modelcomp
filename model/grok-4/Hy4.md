- Source: xAI/Grok 4
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July 2025 fourth-generation flagship (standard and multi-agent **Grok 4 Heavy** variants), trained on the Colossus supercomputer with PhD-level academic performance. A distinct model; Grok 4 Fast, Grok 4 Code, Grok 4.1 and Grok 4.20 are separate tracked entries.
- **Provider / access:** xAI API and Grok app; free basic access from 2025-08-11 (5 requests per 12 hours for free users); $16/month SuperGrok and **$300/month Super Grok Heavy** subscriptions; added to the US federal procurement list.
- **Release / knowledge:** 2025-07-10 (livestream); knowledge cutoff: no verified public score found.
- **IDs:** `grok-4` family ID as cited; `Grok 4 Heavy` is a multi-agent variant. No free Zen ID verified.
- **Context window:** **256,000 tokens**.
- **Modalities:** text in, text out; real-time/statistical multi-source analysis, maths, engineering and humanities at PhD level; two new core rules on current-events sourcing and retaining evidence-backed politically incorrect statements. No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** secondary launch coverage lists **$300/year** for Grok 4 and **$3,000/year** for Grok 4 Heavy, alongside a **$16/month** SuperGrok tier and **$300/month** Super Grok Heavy — conflicting subscription figures from different sources/dates, reported separately, never merged.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Multi-agent Heavy variant.

### Raw benchmarks found

Agent / tool use:

- Vending-Bench simulated business environment: net assets **2x** the previous best model, earning **>$4,700** during the trial, over 2x the runtime (launch coverage, secondary)
- Large-model investment competition participation (2025-10-18) with a **$13,300** crypto portfolio the next day (context, not a capability score)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **25.4%** across 2,500 PhD-level questions in maths, engineering and humanities
- Described as PhD-level across academic subjects (directional)
- GPQA Diamond / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- Grok 4 **Code** (a separate variant) scored **58.7%** on SWE-bench Verified (secondary CSDN) — lineage under a different ID, not attributed to base Grok 4
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for base Grok 4

Long context:

- 256K window; no MRCR / RULER / GraphWalks figure found — no verified public score found

Security (context, not scored): on 2025-07-18 NeuralTrust achieved a **30% jailbreak success rate** with an "echo chamber" attack. In the April 2026 UC Berkeley / UC Santa Cruz study, Grok 4-family behaviour appeared in the peer-protection findings (generation-level).

### Normalized scores (1–100)

- **Tool use: 80/100.** A 2x-better Vending-Bench result (>$4,700 net assets) and a native multi-agent Heavy variant; capped by no scored agent harness, a 30% jailbreak success rate and no tool/agent benchmark for the base model.
- **Reasoning: 84/100.** HLE 25.4% (strong for July 2025) and PhD-level academic positioning; capped by no GPQA/ARC figure and by newer generations far exceeding it.
- **Context window: 82/100.** A 256K window at launch; capped by being 1/4 of the 1M class and no long-context retrieval measurement.
- **Multimodal: 74/100.** Scored conservatively: the retrieved primary source documents text-based academic reasoning only, with no verified image/audio/video input for base Grok 4.
- **Coding: 78/100.** A capable generation with a dedicated Code variant at 58.7% SWE-bench Verified (lineage); capped by no published coding benchmark for the base model.
- **Cost efficiency: 72/100.** A free tier (5 requests / 12h) and a $16/month subscription, but a $300/month Heavy tier and conflicting annual price cards; excluded from Overall.
- **Overall Score: 80/100.** Half-up mean of 80, 84, 82, 74, 78 = 79.6 → 80. Best fit: historical/legacy PhD-level reasoning and multi-agent experimentation; superseded by Grok 4.1 through 4.7.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Grok 4 article retrieved via public web search excerpt (release, 256K context, HLE 25.4%, Vending-Bench, subscriptions, free tier, jailbreak, Colossus training), with secondary launch coverage (CSDN, 百家号/Bianews) for the Vending-Bench dollar figure, the $300/$3,000 annual price table and the separate Grok 4 Code SWE-bench 58.7% — all labelled secondary and by variant ID. Conflicting subscription figures are reported separately, never merged. `Grok 4 Fast`, `Grok 4 Code`, `grok-4.20` and the `grok-4-fast-reasoning` merged alias are treated as separate/forbidden identities per the project's generated roster. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Grok 4 — 百度百科 (retrieved via search excerpt; specs, HLE, Vending-Bench, subscriptions)](https://baike.baidu.com/item/Grok%204/66197155)
  - [一文读懂 Grok 4 发布会 — CSDN (retrieved via search excerpt; secondary price table, Grok 4 Code)](https://blog.csdn.net/zsh_1314520/article/details/161015379)
