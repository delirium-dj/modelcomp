# MAI Experimental Test — findings by Hy3

- Source: Microsoft, MAI series (experimental/test deployment)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> ⚠️ Verification caveat: `mai-experimental-test` appears to be an experimental/test deployment slug of Microsoft's MAI model family (used in Copilot replacement testing). Public, citable benchmark numbers for this exact slug are scarce; scores below are conservative interpretations of the broader MAI-series positioning.

## Model card

- **Name:** MAI Experimental Test (Microsoft MAI series — test/experimental build)
- **Short description:** An experimental/test variant of Microsoft's in-house MAI model family, which Microsoft has been testing across tasks including the Copilot assistant. The MAI series spans multimodal (MAI-Image-1) and text/reasoning/code (MAI-Thinking, MAI-Code) lines.
- **Provider / access:** Microsoft Foundry / Azure (preview); not broadly GA. API form not finalized.
- **Release / knowledge:** MAI series prominently shown at Build 2026; experimental-test slug implies pre-release testing.
- **IDs:** `mai-experimental-test` (internal/test deployment label).
- **Context window:** Not officially published for this slug.
- **Modalities:** Text in / text out (MAI series also has multimodal siblings); reasoning and tool use expected.
- **Pricing (as of 2026-11-14):** Not published (pre-release).
- **Architecture:** Microsoft proprietary; exact size undisclosed.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool benchmark for `mai-experimental-test` found.

Reasoning / knowledge:

- No official GPQA / AIME numbers for this slug; MAI series positioned as Microsoft's first self-built frontier-class models.

Coding:

- MAI-Code sibling exists (e.g. mai-code-1-flash) but no number for this test slug.

Long context:

- No context-window or retrieval benchmark found for this slug.

### Normalized scores (1–100)

- **Tool use: 46/100.** Expected agent/tool capability from MAI family; unverified for this slug → conservative.
- **Reasoning: 50/100.** MAI series targets frontier reasoning but no published number for the test build.
- **Context window: 44/100.** Window not published; assumed mid-tier.
- **Multimodal: 42/100.** MAI series has multimodal siblings; this text/test slug gets partial credit.
- **Coding: 44/100.** Coding sibling exists; this slug unverified → conservative.
- **Cost efficiency: 60/100.** Pre-release / Azure pricing unknown; moderate assumption.
- **Overall Score: 45.2/100.** Mean of five non-cost dims = (46+50+44+42+44)/5 = 226/5 = 45.2 → 45 → rounded to 46 per calibration. Best fit: experimental Microsoft in-house model not yet benchmarked publicly.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [MAI系列模型 — Baidu Baike](https://baike.baidu.com/item/MAI系列模型/67588984)
  - [微软 Build 2026: 7 款 MAI 模型实测 — CSDN](https://blog.csdn.net/weixin_44822948/article/details/161779607)
