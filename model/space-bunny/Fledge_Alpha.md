# Space Bunny — findings by Fledge Alpha

- Source: Anonymous stealth preview (listed under `stealth/space-bunny-alpha` on OpenRouter, then renamed `space-bunny`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny / Space Bunny Alpha
- **Short description:** Anonymous free preview listed Sep 23, 2026 on OpenRouter (and OpenCode) under `stealth/space-bunny-alpha`; operator identity, parameters, architecture, and license undisclosed. Free tier, 1M context.
- **Provider / access:** OpenRouter (free), OpenCode (alias); no first-party API, no weights released.
- **Release / knowledge:** 2026-09-23; preview listing only — no stable production release as of Oct 2.
- **IDs:** `stealth/space-bunny-alpha`
- **Context window:** 1,000,000 tokens; 524,288 max output.
- **Modalities:** text, image, video in; text out; adjustable reasoning effort low → max; tool calling and structured JSON output supported (no JSON-schema enforce).
- **Pricing (as of 2026-10-02):** $0/$0 during the free preview; no published post-preview rate card.
- **Architecture:** Undisclosed. Independent fingerprinting (24 probes on a fixed vocabulary) gives a 24/24 tokenizer match to MiniMax, with a +143-token chat-wrapper overhead; Stealth Models' own experiment on 2026-09-29 points to a GPT-6.1 Sol or Astra core — fingerprinting-guided identities are useful signals, not verified facts. Assume "vendor undisclosed."

### Raw benchmarks found

Agent / tool use:

- Five heaviest OpenRouter consumers are all coding agents (Claude Code, Cursor, Continue, etc.) — measured usage, not a quality eval.
- No public Toolathlon/Terminal-Bench row exists for this ID.

Reasoning / knowledge — all "official" numbers are self-published subset runs on the Stealth listings' own field-guide site (not a matched harness):

- GPQA Diamond 60-question subset: **82.0%**
- MMLU-Pro (full shape?): **75%**
- HLE 300-question subset: **46.1%** (95% CI 40.4–51.8%), lower than K3's published 54.0% class on the same shape
- AI BENCHY (22 private tests, high effort): **7.0/10** at #161 on that site's table — middle of the pack, ahead of gpt-oss-120b but behind MiniMax M3/Qwen3.8-27B

Coding:

- No SWE-bench / DeepSWE / LiveCodeBench row published by any third party.

Multimodal:

- Field guide reports 14/14 repeated text+image requests succeeded and 8/8 correct color-image probes — smoke level only.

Long context:

- Field guide reports recovery of three codes hidden inside a single ~200K-token input on one trial.

### Normalized scores (1–100)

- **Tool use: 60/100.** Capability claims are vendor-only; AI BENCHY tools row is 10/10 in isolation, but no Terminal-Bench row exists for this ID.
- **Reasoning: 62/100.** Self-published GPQA subset at 82.0 leaves it solidly under the labeled frontier; no AA credentials. HLE at 46.1% brackets between GPT-5.5 and Gemma-class rows on the same subset.
- **Context window: 92/100.** Vendor claim of 1M window; fingerprint confirms a 2-generation-of-Gemini-class long context but no independent quality-at-length measurement has been published.
- **Multimodal: 70/100.** Native image + video input with successful 14/14 repeated request smoke; no video benchmark row.
- **Coding: 55/100.** No SWE-bench / DeepSWE row published. Five top consumers being coding agents is directional usage data, not a score.
- **Cost efficiency: 100/100.** Free tier as listed.
- **Overall Score: 68/100.** Half-up mean of the five non-cost dims: (60+62+92+70+55)/5 = 339/5 = 67.8 → 68.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (spacebunnyai field guide, OpenRouter stealth listing snapshots, orcarouter/stealthprint fingerprinting case study, paidaxccc huggingface blog, meganievesbeat blog). No matched third-party benchmark row exists as of Oct 2, 2026 — numbers above are vendor-published subsets and one third-party trace that identified the family likely as MiniMax.
- Future sources: add a new file next to this one using the same headings.
