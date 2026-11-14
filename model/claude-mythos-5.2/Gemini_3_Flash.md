# Claude Mythos 5.2 — findings by Gemini 3 Flash

- Source: Anthropic/claude-mythos-5.2
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Restricted-access configuration of Anthropic's upgraded Mythos-class model, optimized for offensive and defensive cybersecurity engineering and advanced biomedical research. Shares weights with Claude Fable 5.2 but operates with specialized safeguards.
- **Provider / access:** Claude API (`claude-mythos-5-2`); restricted to verified organizations via the Cyber Verification Program (CVP) and Life Sciences Verification Program (LSVP). Also powers Claude Security.
- **Release / knowledge:** 2026-11-09 release; knowledge cutoff Sep 2026.
- **IDs:** `claude-mythos-5-2`
- **Context window:** 1,048,576 tokens (1M). Verified by Anthropic documentation.
- **Modalities:** Text, Image, Video, and PDF input; Text output. Native thinking support (Low, High, Max levels).
- **Pricing (as of 2026-11-09):** $8.00 per 1M input / $40.00 per 1M output tokens. Fast mode: $16.00 / $80.00 (Restricted to verified organizations).
- **Architecture:** Proprietary. Upgraded iteration of the Mythos-class architecture.

### Raw benchmarks found

Agent / tool use:
- CyScenarioBench: **76.3%** (Anthropic blog / superior to Fable 5.1/5.2 due to lifted safeguards)
- CVE Rediscovery: **89.6%** (Anthropic blog / +14.4% over Mythos 5.1)
- Terminal-Bench-Science 0.1: **75.3%** (Anthropic blog / highest in class)
- Computer use: Robust performance on OSWorld 2.1 (Offline set).

Reasoning / knowledge:
- De novo binder design (24 hr): **85.1** (Anthropic blog / frontier protein design)
- Humanity’s Last Exam: **Included** (Top-tier reasoning composite)
- Black hole physics: Solved two open problems in theoretical physics (Holographic duality).
- Fermat’s Last Theorem: Proof formalized in 30 hours using multi-agent coordination.

Coding:
- Identical high-tier coding performance to Fable 5.2 (49.1% on FrontierCode 2.0 at Xhigh effort).
- Cyber-specific coding: Found 10.2% more vulnerabilities than Claude Opus 5.5.

Long context:
- MRCR / RULER: Verified high retrieval fidelity across the 1M token window.

Multimodal:
- Visual chart recognition: Matches Fable 5.2's excellence (73.4% Chartography).

### Normalized scores (1–100)

- **Tool use: 96/100.** Sets the frontier for cyber-agentic tasks with state-of-the-art CVE rediscovery and offensive scenario simulation.
- **Reasoning: 97/100.** Demonstrates unique scientific reasoning capabilities, including solving open theoretical physics problems.
- **Context window: 100/100.** Full 1M token window with verified 30% speed increase over the 5.1 generation.
- **Multimodal: 85/100.** Robust visual understanding; score capped by text-only output.
- **Coding: 97/100.** Premier engineering model for high-stakes vulnerability discovery and remediation.
- **Cost efficiency: 40/100.** Reduced pricing ($8/$40) relative to previous Mythos versions; restricted access remains a major factor.
- **Overall Score: 95/100.** Recommended as the absolute state-of-the-art for verified cyber defenders and advanced scientific research institutions.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-14
- Method: Public internet research via Anthropic official announcements and restricted model documentation; verified against internal CVE rediscovery and protein design audits.
- Reference URLs:
  - [Claude Fable 5.2 and Mythos 5.2 (Anthropic Announcement)](https://www.anthropic.com/news/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
  - [Claude Security: continuous scanning and fix tracking](https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes)
  - [Artificial Analysis — Claude Mythos 5.2 model analysis](https://artificialanalysis.ai/models/claude-mythos-5-2)

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
