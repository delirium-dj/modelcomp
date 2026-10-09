# MAI-Code-1-Flash — findings by Step 5 Preview

- Source: Microsoft AI (`MAI-Code-1-Flash`, released 2026-06-02)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash (Microsoft AI's in-house coding model, the original of the MAI-Code line)
- **Short description:** Microsoft's first from-scratch coding model — a 137B-total / **5B-active** sparse MoE distilled in spirit from the MAI-Thinking-1 mid-training checkpoint (trained March–May 2026, released at Build on June 2), built specifically for the **GitHub Copilot production harness** so that offline gains translate into real editor quality. Its defining feature is adaptive solution length: concise on simple requests, deeper reasoning budgets on hard ones — "solving harder problems with up to 60% fewer tokens" than Haiku 4.5 on SWE-bench Verified. Microsoft's model card shows it beating Claude Haiku 4.5 on every coding benchmark tested, including a +16-point lead on SWE-Bench Pro (51.2% vs 35.2%), and VS Code production telemetry confirmed the story: better quality scores than Haiku 4.5 and GPT-5.4 Mini with 11–13% fewer tokens per turn, and 11% higher 2-day return usage. Superseded by MAI-Code-1.1-Flash (2026-08-11).
- **Provider / access:** GitHub Copilot (VS Code model picker + Auto picker) and Microsoft Foundry/Azure; proprietary, no weights.
- **Release:** 2026-06-02; training cutoff December 2025; English-focused.
- **Context window:** 256K tokens (256,000 in / 128,000 out per models.dev; some catalogs list 128K).
- **Modalities:** Text in → text out.
- **Pricing (as of 2026-10-09):** $0.15/M input, $0.60/M output via Azure (Oct 2026); $0.75/$4.50 as a GitHub Copilot premium-request route.
- **Architecture:** sparse MoE transformer, 137B total / 5B active; training data inherited from the MAI-Thinking-1 base plus code-specific mid-training and synthetic SWE task generation at scale.

### Raw benchmarks found

Vendor model card (MAI-Code-1-Flash vs Claude Haiku 4.5; GH Copilot production harness):

- SWE-Bench Verified: **71.6%** (66.6) — with up to 60% fewer output tokens
- SWE-Bench Pro: **51.2%** (35.2); SWE-Bench Multilingual: **65.5%** (62.7)
- Terminal Bench 2: **54.8%** (41.6)
- AIME 2026: **92.5%** (83.3); GPQA Diamond: **84.6%** (73.2); Frontier Science: **58.2%** (42.3)
- IF Bench: **75.0%** (46.1); τ²-Bench telecom: **71.7%** (54.7)
- GDPval-AA: **735** (Haiku 4.5: 907 — the one row where Haiku leads)

Microsoft production telemetry (VS Code, June–July 2026):

- Outperforms Claude Haiku 4.5 and GPT-5.4 Mini on code-survival, commit-survival and accept rates; 11% lower median token usage vs Haiku, 13% vs GPT-5.4 Mini
- Auto A/B flights: 11% higher 2-day repeat usage than Haiku 4.5, 6% higher than GPT-5.4 Mini

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-Bench telecom 71.7%, IF Bench 75.0% and Terminal Bench 2 54.8% are solid mid-band; GDPval-AA 735 (below Haiku 4.5's 907) and no MCP Atlas/Toolathlon figure keep it out of the upper band.
- **Reasoning: 66/100.** AIME 92.5%, GPQA 84.6% and Frontier Science 58.2% are upper-mid-band; no HLE/ARC-AGI figure and a December-2025 training cutoff cap it.
- **Context window: 72/100.** 256K is the 200K–500K band (65–84) with no published retrieval curve (no MRCR/RULER/AA-LCR).
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 66/100.** SWE-bench Verified 71.6% and SWE-Pro 51.2% (+16 over Haiku 4.5) are strong for 5B active; Terminal Bench 2 54.8% and the absence of SWE-Pro frontier-tier scores keep it mid-upper.
- **Cost efficiency: 97/100.** $0.15/$0.60 per million tokens with 5B active parameters and 60%-fewer-token efficiency — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier.
- **Overall Score: 55/100.** Best-fit recommendation: the efficiency coding workhorse of mid-2026 — Haiku-4.5-beating coding quality at 5B active and $0.15/$0.60, trained inside the Copilot harness; superseded within two months by MAI-Code-1.1-Flash.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Microsoft AI model card + launch post + data card, VS Code blog production telemetry, models.dev/AnotherWrapper pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MAI_Code_2.md`, using the same headings.
